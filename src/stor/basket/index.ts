/* eslint-disable @typescript-eslint/no-unused-expressions */
import { create } from "zustand";
import { Basket } from "./type";
import { persist } from "zustand/middleware";

export const useBasket = create(
  persist<Basket>(
    (set, get) => ({
      items: [],
      invoice: {
        totalPrice: 0,
      },
      action: {
        addBascetItems: (item, quantity) => {
          const isEcsist = get().items.some((_item) => _item._id == item._id);
          if (isEcsist) {
            return set((oldBasket) => ({
              invoice: {
                totalPrice: oldBasket.invoice.totalPrice + item.price,
              },
              items: oldBasket.items.map((_item) => {
                if (_item._id == item._id) {
                  return {
                    ..._item,
                    quantity: _item.quantity + quantity,
                  };
                }
                return _item;
              }),
            }));
          }

          set((oldBasket) => ({
            invoice: {
              totalPrice: oldBasket.invoice.totalPrice + item.price,
            },
            items: [...oldBasket.items, { ...item, quantity }],
          }));
        },
        removeBascetItems: (item) => {
          const shouldRemov = item.quantity == 1;
          if (shouldRemov) {
            return set((oldBasket) => ({
              invoice: {
                totalPrice: oldBasket.invoice.totalPrice - item.price,
              },
              items: oldBasket.items.filter((_item) => {
                _item._id !== item._id;
              }),
            }));
          }
          set((oldBasket) => ({
            invoice: {
              totalPrice: oldBasket.invoice.totalPrice - item.price,
            },
            items: oldBasket.items.map((_item) => {
              if (_item._id == item._id) {
                return {
                  ..._item,
                  quantity: _item.quantity - 1,
                };
              }
              return _item;
            }),
          }));
        },
      },
    }),
    {
      name: "local-basket",
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => !['action'].includes(key))) as Basket,
    }
  )
);
