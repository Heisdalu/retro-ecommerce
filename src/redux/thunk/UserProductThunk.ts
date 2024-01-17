import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { USERS } from "../../constants/Types";

// not used file but i have not figured it yet
export const fetchUserProduct = createAsyncThunk(
  "data/fetchUserProduct",
  async (user_uid) => {
    try {
      //@ts-ignore
      const docRef = doc(db, USERS, user_uid);
      const docSnap = await getDoc(docRef);
      // if it  does not exist
      if (!docSnap.exists()) {
        throw new Error("something went wrong. Try again");
      }

      return docSnap.data();
    } catch (e: any) {
      if ((e as Error) && e.message.includes("offline")) {
        throw new Error("No/slow internet connection. Try again");
      }
    }
  }
);
