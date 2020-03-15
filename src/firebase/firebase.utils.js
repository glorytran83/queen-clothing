import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDDmjz2ONkSyzR5q8Xs8es0a7j9ariiVrs",
  authDomain: "queenshopdb.firebaseapp.com",
  databaseURL: "https://queenshopdb.firebaseio.com",
  projectId: "queenshopdb",
  storageBucket: "queenshopdb.appspot.com",
  messagingSenderId: "847388014051",
  appId: "1:847388014051:web:46ec2dfd0d353bf8ae5cd6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('errrrr herer', error.message);
    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;