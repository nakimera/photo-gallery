import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Firestore = {
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
      } catch (error) {}
    });
  },
};

export default Firestore;
