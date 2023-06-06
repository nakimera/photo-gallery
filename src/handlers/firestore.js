import {
  setDoc,
  doc,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
  readDocs: (...args) => {
    let docs = [];
    const ref = collection(db, "stocks");

    return new Promise(async (resolve) => {
      try {
        const snapShots = await getDocs(ref);
        snapShots.forEach((doc) => {
          const d = { ...doc.data() };
          docs.push(d);
        });
        resolve(docs);
      } catch (error) {
        console.log(error);
      }
    });
  },

  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      try {
        const randomIndex = Math.floor(Math.random() * 1000000);
        const docRef = doc(db, collection_name, `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createdAt: serverTimestamp(),
        });
        resolve("new doc successfully inserted");
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default Firestore;
