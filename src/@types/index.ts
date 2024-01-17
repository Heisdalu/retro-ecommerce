import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface productDetail {
  count: number;
  group: string;
  id: string;
  image: string;
  price: number;
  saved: boolean;
  title: string;
}
export interface initialTypes {
  cart: productDetail[];
  saved: productDetail[];
}
export interface userCredentialTypes {
  uid: string;
  email: string;
  displayName: string;
}

export interface userCart_SavedTypes {
  cart: productDetail[];
  saved: productDetail[];
}
export interface isAuthenticatedTypes {
  isAuthenticated: boolean;
}

export type userStatusType = "guests" | "users";

export type userCartDetailType = (
  userId: string,
  databaseID: userStatusType,
  updateFunc: ActionCreatorWithPayload<productDetail[]>
) => {
  userId: string;
  databaseID: userStatusType;
  updateFunc: ActionCreatorWithPayload<productDetail[]>;
};

export type voidFuncType = () => void;
export type getUserFuncType = (e: productDetail) => void;
export interface disableAllType {
  id: string | undefined;
  state: boolean;
}

export type activateDisableType = (itemId: string) => void;
export type deactivateDisableType = (itemId?: string) => void;

export type combinedCartActionType = (
  productArr: productDetail[],
  item: productDetail,
  userId: string,
  callback: ActionCreatorWithPayload<productDetail[]>,
  databaseID: userStatusType
) => void;

export interface checkOutFomrikValueType {
  country: string;
  postalCode: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}
export interface errorCheckOutFomrikValueType {
  country?: string;
  postalCode?: string;
  cardNumber?: string;
  expirationMonth?: string;
  expirationYear?: string;
  cvv?: string;
}
