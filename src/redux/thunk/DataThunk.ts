import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { productDetail } from "../../@types";

type fetchDataThunkResponse = productDetail[];

export const fetchData = createAsyncThunk<fetchDataThunkResponse, void>(
  "data/fetchData",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "data"));
      if (querySnapshot.empty) {
        throw new Error("No internet connection. Please try again");
      }

      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as fetchDataThunkResponse;
    } catch (e: any) {
      throw new Error((e as Error).message || "something went wrong");
    }
  }
);

