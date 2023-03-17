import { useNavigate } from "react-router-dom";
import { useGetProductBySearchQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";
import Scroller from "./base/Scroller";
import ItemList from "./ItemList";
import Status from "./status/status";

const WeekItemScroller = () => {
  const navigate = useNavigate();
  const { data, isFetching, isSuccess } = useGetProductBySearchQuery({
    name: "shirt",
    limit: 12,
  });
  let body;
  if (isFetching) {
    return <Status status="loader" />;
  } else if (isSuccess) {
    body = data.products.map((item: CartItemType) => (
      <ItemList key={item.id} item={item} />
    ));
  }

  return <Scroller>{body}</Scroller>;
};

export default WeekItemScroller;
