import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../slice/cartSlice";
import { useEffect, useState } from "react";

const CartItemsList = ({ item }) => {
  const dispatchCartItem = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const removedCartItem = (id) => {
    // Dispatch an removeItem action
    dispatchCartItem(removeItem(id));
  };


  return (
    <li className="pb-4 mb-4 border-b-2 last:border-b-0 to flex items-start justify-between">
      <div className="w-9/12">
        <h3 className="font-normal text-md mb-1">{item.card.info.name}</h3>
        <span className="block font-small font-normal text-sm">
          ₹
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
        </span>
      </div>
      <div className="flex items-center border border-orange-500 px-3 py-2">
        <button
          className="text-sm"
          onClick={() => removedCartItem(item.card.info.id)}
        >
          ➖
        </button>
        <span className="font-bold text-xl text-orange-500 px-4">
          {0}
        </span>
        <button className="text-sm">➕</button>
      </div>
    </li>
  );
};

export default CartItemsList;
