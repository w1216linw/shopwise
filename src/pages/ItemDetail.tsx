import { useState } from "react";
import { useParams } from "react-router-dom";
import IndicatorButtons from "../components/IndicatorBtn";
import RateStar from "../components/RateStar";
import Status from "../components/status/status";
import { addToCart } from "../features/cart/cartSlice";
import { useGetProductQuery } from "../features/productApi/apiSlice";
import { useAppDispatch, useAppSelector } from "../utilities/hooks";
import { calPercentage, findInDeal } from "../utilities/utilFn";

const ItemDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data, isFetching } = useGetProductQuery(id);
  const items = useAppSelector((state) => state.topDeals.items);

  const [imgIdx, setImgIdx] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.dataset.lable) {
      setImgIdx(parseInt(e.currentTarget.dataset.lable));
    }
  };

  if (isFetching) {
    return <Status status="loader" />;
  }

  let price = <p>${data.price}</p>;

  if (findInDeal(items, data)) {
    const [ori, off] = calPercentage(data.price, data.discountPercentage);
    price = (
      <div>
        <p>
          <span className="__discountPercentage">
            -{data.discountPercentage}%
          </span>
          ${ori - off}
        </p>
        <p className="fs-300">
          List Price: <s>${ori}</s>
        </p>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <div className="detail-images">
        <div className="__image">
          <img src={data.images[imgIdx]} alt={data.title} />
        </div>
        <div className="indicator">
          <IndicatorButtons
            ids={3}
            handleClick={handleClick}
            selectedIdx={imgIdx}
          />
        </div>
      </div>
      <div className="detail-info">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <RateStar rate={data.rating} />
        <hr className="my-3" />
        {price}
        <button
          className="btn mt-4"
          data-color="orange"
          onClick={() => dispatch(addToCart(data))}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
