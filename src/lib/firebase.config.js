// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDImErGyP9P28vmUcjToBNCvPJ5_yTDIFM",
  authDomain: "photo-gallery-f0e24.firebaseapp.com",
  projectId: "photo-gallery-f0e24",
  storageBucket: "photo-gallery-f0e24.appspot.com",
  messagingSenderId: "584306654877",
  appId: "1:584306654877:web:7f607b70c427e95eb39e74",
};

// Initialize Firebase
const app = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(`No Firebase configuration object provided.' + '\n' + 
        'Add your web app's configuration object to firebase-config.js`);
  } else {
    console.log("Firebase initialized");
  }
  return initializeApp(firebaseConfig);
};

export default app;
