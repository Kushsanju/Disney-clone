
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDZdZrxBrXdia2jw3FxB5KYM_dtSHxfA88",
    authDomain: "disneyplusclone-5387e.firebaseapp.com",
    projectId: "disneyplusclone-5387e",
    storageBucket: "disneyplusclone-5387e.appspot.com",
    messagingSenderId: "408747295095",
    appId: "1:408747295095:web:230aa4e0a67d5bfe046172"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
