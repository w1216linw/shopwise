import React from "react";
import { CartItemType } from "../utility/types";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ItemList: React.FC<CartItemType> = (item) => {

  const dispatch = useDispatch();
  
  return (
    <div className="single-item | padding-400">
      <img className="item-image" src={item.image} alt={item.image} />
      <h3 className="item-name">{item.title}</h3>
      <div className="| flex-group">
        <p>rating: <span className="item-rating | fw-bold">{item.rating.rate}</span></p>
        <p className="item-rate-count | fs-200">{item.rating.count}</p>
      </div>
      <div className="| flex-group space-between">
        <p className="item-price | fs-700">${item.price}</p>
        <button onClick={() => dispatch(addToCart(item))}>Add</button>
      </div>
    </div>
  );
};

export default ItemList;
