"use client";
import { useBasket } from "@/stor/basket";
import { BasketItem } from "@/stor/basket/type";
import React from "react";

const Basket = () => {
  const { totalPrice } = useBasket((state) => state.invoice);
  const { removeBascetItems } = useBasket((state) => state.action);
  const items = useBasket((state) => state.items);
  return (
    <div className="flex items-center  gap-2 w-full">
      <section className="w-[70%] bg-[#494747] rounded-2xl p-4 shadow-current m-8">
        <div className="flex flex-col items-center w-full justify-around px-4">
          <div className="flex items-center justify-around w-full p-4">
            <h1>سبد خرید</h1>
            <span>{totalPrice.toLocaleString()} مجموع کل</span>
          </div>
          <hr />
          <table className="min-w-full table-auto  rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border">
                <th className="px-4 py-2 text-left">نام کالا</th>
                <th className="px-4 py-2 text-left">قیمت</th>
                <th className="px-4 py-2 text-left">تعداد</th>
                <th className="px-4 py-2 text-left">جمع</th>
                <th className="px-4 py-2 text-left">حذف</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.length > 0 &&
                items?.map((item) => (
                  <tr key={item._id} className="border-t ">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">
                      {item.price.toLocaleString()} تومان
                    </td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">
                      {(item.price * item.quantity).toLocaleString()} تومان
                    </td>
                    <td
                      onClick={() => removeBascetItems(item)}
                      className="px-4 py-2"
                    >
                      حذف
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {items && items.length == 0 && <>سبد خرید شما خالی است</>}
        </div>
      </section>
      <section className="w-[30%]">p</section>
    </div>
  );
};

export default Basket;
