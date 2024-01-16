import { productDetail } from "..";

export interface userProductSliceTypes {
  loading: boolean;
  data: { cart: productDetail[]; saved: productDetail[] };
  error: boolean;
  errorMessage: string;
  resolved: boolean;
}
