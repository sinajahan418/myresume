import { Products } from "@/type";

export interface BasketItem extends Products {
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  invoice: {
    totalPrice: number;
  };
  action: {
    addBascetItems: (item: Products, quantity: number) => void;
    removeBascetItems: (item: BasketItem) => void;
  };
}
