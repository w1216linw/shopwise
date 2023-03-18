import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { TbTrashX } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  decrement,
  deleteItem,
  increment,
} from "../../features/cart/cartSlice";
import { CartItemType } from "../../utilities/types";

const CartItem: React.FC<CartItemType> = (cartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="single-cartItem ">
      <img src={cartItem.thumbnail} alt={cartItem.title} />
      <p>${cartItem.price.toFixed(2)}</p>
      <div className="quantity-info | flex-group">
        <div className="flex-group">
          <button
            onClick={() => dispatch(decrement(cartItem.id))}
            className="hidden-border-btn"
          >
            <AiOutlineMinusSquare size="20" />
          </button>
          <p>{cartItem.quantities}</p>
          <button
            onClick={() => dispatch(increment(cartItem.id))}
            className="hidden-border-btn"
          >
            <AiOutlinePlusSquare size="20" />
          </button>
        </div>
        <button
          className="hidden-border-btn"
          onClick={() => dispatch(deleteItem(cartItem.id))}
        >
          <TbTrashX size="20" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
