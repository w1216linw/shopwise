import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { CartItemType } from "../utility/types";
import { hideLongText } from "../utility/utilFn";

const ItemList: React.FC<CartItemType> = (item) => {
  const dispatch = useDispatch();

  return (
    <div className="single-item | padding-400">
      <img className="item-image" src={item.images[0]} alt={item.title} />
      <h3 className="item-name">{hideLongText(item.title)}</h3>
      <div className="item-rate | flex-group">
        <div className="flex-group" style={{ "--gap": ".5rem" } as any}>
          rating:
          <span className="item-rating | fw-bold">{item.rating}</span>
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
