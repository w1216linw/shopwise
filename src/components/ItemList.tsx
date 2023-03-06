import React from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../utilities/hooks";
import { CartItemType } from "../utilities/types";
import { calPercentage, hideLongText } from "../utilities/utilFn";
import RateStar from "./RateStar";

interface ItemList {
  discount?: boolean;
  item: CartItemType;
}

const ItemList: React.FC<ItemList> = ({ item, discount }) => {
  const dispatch = useAppDispatch();

  let tempItem = { ...item };
  let price = <p className="item-price | fs-600">${tempItem.price}</p>;

  if (discount) {
    let [original, off] = calPercentage(
      tempItem.price,
      tempItem.discountPercentage
    );
    tempItem.price -= off;
    price = (
      <p className="item-price | fs-600">
        ${tempItem.price}
        <s className="__original-price">${original}</s>
      </p>
    );
  }

  return (
    <div className="single-item | padding-400">
      <img
        className="item-image"
        src={tempItem.images[0]}
        alt={tempItem.title}
      />
      <h3 className="item-name">{tempItem.title}</h3>
      <p>{hideLongText(tempItem.description)}</p>
      <div className="item-rate | flex-group">
        <div className="flex-group" style={{ "--gap": ".5rem" } as any}>
          <RateStar rate={tempItem.rating} />
        </div>
      </div>
      <div className="| flex-group space-between">
        {price}
        <button
          className="btn"
          data-color="blue"
          onClick={() => dispatch(addToCart(tempItem))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemList;
