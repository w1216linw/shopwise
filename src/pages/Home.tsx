import CategoriesScroller from "../components/CategoriesScroller";
import TopDealCard from "../components/TopDealCard";
import WeekItemScroller from "../components/WeekItemScroller";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import useLoadDeal from "../utilities/useLoadDeal";

export default function Home() {
  const { data, isLoading, isError } = useGetAllProductsQuery(null);

  const isSuccess = useLoadDeal();

  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <main>
      <section className="home-section">
        <div className="__cate-scroller">
          <CategoriesScroller />
        </div>
        <div className="__top-deals">{isSuccess && <TopDealCard />}</div>
        <div className="__week-deals">
          <WeekItemScroller />
        </div>
      </section>
    </main>
  );
}
