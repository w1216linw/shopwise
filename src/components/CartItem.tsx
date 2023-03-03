import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrement, deleteItem, increment } from "../features/cart/cartSlice";
import { CartItemType } from "../utilities/types";

const CartItem: React.FC<CartItemType> = (cartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="single-cartItem | flex-group">
      <img src={cartItem.thumbnail} alt={cartItem.title} />
      <div className="cartItem-info">
        <h3>{cartItem.title}</h3>
        <div className="quantities-btns | flex-group space-evenly">
          <button
            onClick={() => dispatch(decrement(cartItem.id))}
            className=" btn hidden-border"
          >
            <AiOutlineMinusSquare className="fs-500" />
          </button>
          <p>{cartItem.quantities}</p>
          <button
            onClick={() => dispatch(increment(cartItem.id))}
            className=" btn hidden-border"
          >
            <AiOutlinePlusSquare className="fs-500" />
          </button>
        </div>
        <button
          className="btn"
          data-color="red"
          onClick={() => dispatch(deleteItem(cartItem.id))}
        >
          Delete
        </button>
      </div>
      <p>${cartItem.price.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
