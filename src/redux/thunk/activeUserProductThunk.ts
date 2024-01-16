import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../configs/firebase-config";
import { USERS } from "../../constants/Types";
import { productDetail } from "../../@types";

interface fetchDataResponse {
  cart: productDetail[];
  saved: productDetail[];
}

export const fetchActiveUserProduct = createAsyncThunk<
  fetchDataResponse,
  string
>("data/fetchActiveUserProduct", async (userID: string) => {
  const userRef = doc(db, USERS, userID);
  try {
    const docRef = await getDoc(userRef);
    if (!docRef.exists()) {
      throw new Error("user not found");
    }
    return docRef.data() as fetchDataResponse;
  } catch (e: any) {
    throw new Error((e as Error).message || "An unknown error occurred");
  }
});
