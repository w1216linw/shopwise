import React from "react";
import { CartItemType } from "../utility/types";
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai';
import {CiSquareRemove} from 'react-icons/ci'
import { increment, decrement, deleteItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem: React.FC<CartItemType> = (cartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="single-cartItem | flex-group">
      <img src={cartItem.image} alt={cartItem.title} />
      <div>
        <h3>{cartItem.title}</h3>
        <div className="quantities-btns | flex-group space-evenly">
          <button onClick={() => {}}><AiOutlineMinusSquare /></button>
          <p>{cartItem.quantities}</p>
          <button onClick={() => {}}><AiOutlinePlusSquare /></button>
        </div>
        <p>${cartItem.price}</p>
      </div>
      <button onClick={() => dispatch(deleteItem(cartItem.id))} ><CiSquareRemove /></button>
    </div>
  );
};

export default CartItem;
