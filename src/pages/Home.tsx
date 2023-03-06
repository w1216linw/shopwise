import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import Scroller from "../components/Scroller";
import TopItem from "../components/TopItems";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";

export default function Home() {
  const { data, isLoading, isError } = useGetAllProductsQuery(null);
  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Layout>
      <Scroller />
      <section className="items-container">
        <TopItem />
        {data.products?.map((item: CartItemType) => (
          <ItemList key={item.id} item={item} />
        ))}
      </section>
    </Layout>
  );
}
