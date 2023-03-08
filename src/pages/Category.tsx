import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Scroller from "../components/Scroller";
import { useGetProductsOfCategoryQuery } from "../features/productApi/apiSlice";
import { useAppSelector } from "../utilities/hooks";
import { CartItemType } from "../utilities/types";
import { findInDeal } from "../utilities/utilFn";

const Category = () => {
  const { name } = useParams();
  const { items } = useAppSelector((state) => state.topDeals);

  const { data, isError, isFetching, isSuccess } =
    useGetProductsOfCategoryQuery(name);
  let body;
  if (isFetching) {
    body = <div>loading...</div>;
  } else if (isError) {
    return (
      <div>
        <p>error</p>
      </div>
    );
  } else if (isSuccess) {
    body = data.products?.map((item: CartItemType) =>
      findInDeal(items, item) === undefined ? (
        <ItemList key={item.id} item={item} />
      ) : (
        <ItemList key={item.id} item={item} discount />
      )
    );
  }

  return (
    <section className="items-container">
      <Scroller selected={name} />
      {body ? body : <p>error...</p>}
    </section>
  );
};

export default Category;
