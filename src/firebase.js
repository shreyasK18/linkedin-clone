import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "<apikey>",
    authDomain: "<authdomain>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>",
    appId: "<appid>"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth };