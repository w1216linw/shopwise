import React from "react";

import { CartItemType } from "../../utilities/types";
import QuantityGroup from "./QuantityGroup";

const CartItem: React.FC<CartItemType> = (cartItem) => {
  return (
    <div className="single-cartItem ">
      <img src={cartItem.thumbnail} alt={cartItem.title} />
      <p>${cartItem.price.toFixed(2)}</p>
      <QuantityGroup {...cartItem} />
    </div>
  );
};

export default CartItem;
