import { useNavigate } from "react-router-dom";
import { useGetProductBySearchQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";
import ItemList from "./ItemList";
import Scroller from "./Scroller";
import Loading from "./status/Loading";

const WeekItemScroller = () => {
  const navigate = useNavigate();
  const { data, isFetching, isSuccess } = useGetProductBySearchQuery({
    name: "shirt",
    limit: 12,
  });
  let body;
  if (isFetching) {
    return <Loading />;
  } else if (isSuccess) {
    body = data.products.map((item: CartItemType) => (
      <ItemList key={item.id} item={item} />
    ));
  }

  return <Scroller>{body}</Scroller>;
};

export default WeekItemScroller;
