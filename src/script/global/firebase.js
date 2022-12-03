// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBaHHiaS_gXqlAIkHi7m9o_ZWo35LefCVw',
  authDomain: 'tigatungkuproject.firebaseapp.com',
  projectId: 'tigatungkuproject',
  storageBucket: 'tigatungkuproject.appspot.com',
  messagingSenderId: '215385545595',
  appId: '1:215385545595:web:26f6381e045bdcba32fbde',
  measurementId: 'G-ME057FPG2N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
