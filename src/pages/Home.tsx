import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import Scroller from "../components/Scroller";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";

export default function Home() {
  const { data, isLoading, isError } = useGetAllProductsQuery(null);
  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  console.log(data.products);
  return (
    <Layout>
      <section className="items-container">
        <Scroller />
        {data.products?.map((item: CartItemType) => (
          <ItemList key={item.id} {...item} />
        ))}
      </section>
    </Layout>
  );
}
