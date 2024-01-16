import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../configs/firebase-config";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "data"));
    if (querySnapshot.empty) {
      throw new Error("No internet connection. Please try again");
    }
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    throw new Error(e.message);
  }
});
