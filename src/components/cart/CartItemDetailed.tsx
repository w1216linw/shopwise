import React from "react";
import { useDispatch } from "react-redux";
import { CartItemType } from "../../utilities/types";
import QuantityGroup from "./QuantityGroup";

const CartItemDetailed: React.FC<CartItemType> = (cartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-detail | my-3 flex-group">
      <div className="__img">
        <img src={cartItem.thumbnail} alt={cartItem.title} />
      </div>
      <div className="__info | flow">
        <h2>{cartItem.title}</h2>
        <p>{cartItem.description}</p>
        <QuantityGroup {...cartItem} />
      </div>
      <p className="__price">${cartItem.price}</p>
    </div>
  );
};

export default CartItemDetailed;
