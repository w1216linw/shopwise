import React from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../utilities/hooks";
import { CartItemType } from "../utilities/types";
import { hideLongText } from "../utilities/utilFn";
import RateStar from "./RateStar";
const ItemList: React.FC<CartItemType> = (item) => {
  const dispatch = useAppDispatch();

  return (
    <div className="single-item | padding-400">
      <img className="item-image" src={item.images[0]} alt={item.title} />
      <h3 className="item-name">{item.title}</h3>
      <p>{hideLongText(item.description)}</p>
      <div className="item-rate | flex-group">
        <div className="flex-group" style={{ "--gap": ".5rem" } as any}>
          <RateStar rate={item.rating} />
        </div>
      </div>
      <div className="| flex-group space-between">
        <p className="item-price | fs-600">${item.price}</p>
        <button
          className="btn"
          data-color="blue"
          onClick={() => dispatch(addToCart(item))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemList;
