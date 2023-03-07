import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import Scroller from "../components/Scroller";
import TopDealCard from "../components/TopDealCard";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";
import useLoadDeal from "../utilities/useLoadDeal";

export default function Home() {
  const { data, isLoading, isError } = useGetAllProductsQuery(null);

  const isSuccess = useLoadDeal();

  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Layout>
      <Scroller />
      <section className="items-container">
        {isSuccess && <TopDealCard />}
        {data.products?.map((item: CartItemType) => (
          <ItemList key={item.id} item={item} />
        ))}
      </section>
    </Layout>
  );
}
