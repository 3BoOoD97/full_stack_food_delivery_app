import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";

// Saving a new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
      merge: true,
    });
  };