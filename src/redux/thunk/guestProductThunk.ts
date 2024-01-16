import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { GUESTS } from "../../constants/Types";
import { initial } from "../../constants/Types";

export const fetchGuestProduct = createAsyncThunk(
  "data/fetchGuestProduct",
  async (guestID) => {
    const guestRef = doc(db, GUESTS, guestID);
    try {
      const docRef = await getDoc(guestRef);
      if (!docRef.exists()) {
        throw new Error("guest not found");
      }
      return docRef.data();
    } catch (e) {
      // set a new guest
      if (e.message === "guest not found") {
        try {
          await setDoc(guestRef, initial);
        } catch (e) {
          throw new Error(e.message);
        }
      }

      throw new Error(e.message);
    }
  }
);
