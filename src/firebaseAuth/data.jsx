import { createContext, useContext, useState, useEffect } from "react";
import {
	getFirestore,
	doc,
	onSnapshot,
	getDoc,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import app from "./firebase-config.js";
import { useAuth } from "./AuthService.jsx";

const db = getFirestore(app);

const userContext = createContext();
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
	const data = useGetUser();
	return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

const fetchDoc = (collection, document, setter) => {
	getDoc(doc(db, collection, document)).then((doc) => {
		setter(doc.data());
	});
};
const createDoc = (collection, document, data) => {
	setDoc(doc(db, collection, document), data)
		.then(() => {
			console.log("Document Created");
		})
		.catch((error) => {
			console.log("Document creation error: ", error);
		});
};
const updateDoc = (collection, document, data) => {
	updateDoc(doc(db, collection, document), data)
		.then(() => {
			console.log("Document Created");
		})
		.catch((error) => {
			console.log("Document creation error: ", error);
		});
};

const useGetUser = () => {
	const { user } = useAuth();
	const [userData, setUserData] = useState(false);

	useEffect(() => {
		if (user) {
			fetchDoc("users", user.uid, setUserData);
		} else {
			setUserData(false);
		}
	}, [user]);

	return { userData, createDoc, updateDo, fetchDoc };
};
