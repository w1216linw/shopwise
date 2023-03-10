import { useParams } from "react-router-dom";
import CategoriesScroller from "../components/CategoriesScroller";
import ItemList from "../components/ItemList";
import Status from "../components/status/status";
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
    body = <Status status="loader" />;
  } else if (isError) {
    return <Status status="error" text="Internal Error" />;
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
    <section className="section">
      <CategoriesScroller selected={name} />
      <div className="items-container">{body ? body : <p>error...</p>}</div>
    </section>
  );
};

export default Category;
