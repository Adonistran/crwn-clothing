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

export const createUserProfileDocument = async (userAuth, additionData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionData
            });
        } catch (error) {
            console.log("error creating data", error.message);
        }
    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;