import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0-bDW2ASSsrnjI35GWlOVnZBe4C1Irbk',
  authDomain: 'signal-clone-fa412.firebaseapp.com',
  projectId: 'signal-clone-fa412',
  storageBucket: 'signal-clone-fa412.appspot.com',
  messagingSenderId: '1075162893701',
  appId: '1:1075162893701:web:ac4db96134b04361f7c8ec',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
