// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
