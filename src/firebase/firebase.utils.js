import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCC1xxKP18chUbeBK-MaxTWXTqGtSBP52o",
    authDomain: "crwn-data-cb6d1.firebaseapp.com",
    projectId: "crwn-data-cb6d1",
    storageBucket: "crwn-data-cb6d1.appspot.com",
    messagingSenderId: "70755875124",
    appId: "1:70755875124:web:1b6292810cb623641e8d61"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;