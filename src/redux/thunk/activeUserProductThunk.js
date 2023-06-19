import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { USERS } from "../../constants/Types";

export const fetchActiveUserProduct = createAsyncThunk(
  "data/fetchActiveUserProduct",
  async (userID) => {
    const userRef = doc(db, USERS, userID);
    try {
      const docRef = await getDoc(userRef);
      if (!docRef.exists()) {
        throw new Error("user not found");
      }
      return docRef.data();
    } catch (e) {
      throw new Error(e.message);
    }
  }
);

