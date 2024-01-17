import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { GUESTS } from "../../constants/Types";
import { initial } from "../../constants/Types";
import { userCart_SavedTypes } from "../../@types";

export const fetchGuestProduct = createAsyncThunk<userCart_SavedTypes, string>(
  "data/fetchGuestProduct",
  async (guestID: string) => {
    //@ts-ignore
    const guestRef = doc(db, GUESTS, guestID);
    try {
      const docRef = await getDoc(guestRef);
      if (!docRef.exists()) {
        throw new Error("guest not found");
      }
      return docRef.data() as userCart_SavedTypes;
    } catch (e: any) {
      // set a new guest
      if ((e as Error) && e.message === "guest not found") {
        try {
          await setDoc(guestRef, initial);
        } catch (e: any) {
          throw new Error((e as Error)?.message);
        }
      }

      throw new Error(e.message);
    }
  }
);
