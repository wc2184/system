import { createContext, useContext, useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { app } from "./firebase-config.js";
import { useAuth } from "./AuthService.jsx";

const db = getFirestore(app);

const dataContext = createContext();
export const useData = () => useContext(dataContext);

export const DataProvider = ({ children }) => {
  const data = useDatabase();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

const fetchDoc = (collection, document, setter) => {
  getDoc(doc(db, collection, document)).then((doc) => {
    setter(doc.data());
  });
};

const fetchDocs = async (col) => {
  let data = [];

  let getDocHelper = () =>
    getDocs(collection(db, col)).then((docs) => {
      // setter(doc.data());
      // console.log(docs);
      docs.forEach((doc) => {
        // console.log(doc.data());
        data.push(doc.data());
      });
      // setter(data);
    });

  await getDocHelper();
  console.log(data);
  return data;
};
const createDoc = (collection, document, data) => {
  setDoc(doc(db, collection, document), data)
    .then(() => {
      console.log("Document Created");
    })
    .catch((error) => {
      console.log("Document creation error: ", error);
    });

  // MAKE IT SO THAT IT AUTOMATICALLY COLLECTION IS USER.UID
  // NEVERMIND
};
const modifyDoc = (collection, document, data) => {
  updateDoc(doc(db, collection, document), data)
    .then(() => {
      console.log("Document Created");
    })
    .catch((error) => {
      console.log("Document creation error: ", error);
    });
};

const useDatabase = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    if (user) {
      fetchDoc("users", user.uid, setUserData);
    } else {
      setUserData(false);
    }
  }, [user]);

  return { userData, createDoc, modifyDoc, fetchDoc, fetchDocs };
};
