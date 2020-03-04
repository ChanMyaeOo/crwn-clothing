import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDE-mHs-ND8y9j708t_DOX7tRGgUZ6GCDk",
  authDomain: "crwn-db-58bb7.firebaseapp.com",
  databaseURL: "https://crwn-db-58bb7.firebaseio.com",
  projectId: "crwn-db-58bb7",
  storageBucket: "crwn-db-58bb7.appspot.com",
  messagingSenderId: "713293558373",
  appId: "1:713293558373:web:981b963588c76a5301cc8c",
  measurementId: "G-PL211ZE744"
};

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error for creating user object");
    }
  }
  // console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
