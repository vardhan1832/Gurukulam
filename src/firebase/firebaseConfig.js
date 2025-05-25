import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6cwCrjZ7Y_cD-BC1yBn01Grsee6CEmR8",
  authDomain: "gurukulam---lyp.firebaseapp.com",
  databaseURL: "https://gurukulam---lyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gurukulam---lyp",
  storageBucket: "gurukulam---lyp.firebasestorage.app",
  messagingSenderId: "284026556170",
  appId: "1:284026556170:web:803ca649fbbf4174f234f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);