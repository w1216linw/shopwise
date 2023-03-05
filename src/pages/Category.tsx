import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import Scroller from "../components/Scroller";
import { useGetProductsOfCategoryQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";

const Category = () => {
  const { name } = useParams();
  let cate = name?.slice(1);
  const { data, isError, isFetching, isSuccess } =
    useGetProductsOfCategoryQuery(cate);
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
    body = data.products?.map((item: CartItemType) => (
      <ItemList key={item.id} {...item} />
    ));
  }

  return (
    <Layout>
      <section className="items-container">
        <Scroller selected={cate} />
        {body ? body : <p>error...</p>}
      </section>
    </Layout>
  );
};

export default Category;
