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
