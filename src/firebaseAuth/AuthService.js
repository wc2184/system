import { auth } from "./firebase-config";

export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth.signOut();
};
