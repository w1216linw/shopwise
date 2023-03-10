import CategoriesScroller from "../components/CategoriesScroller";
import TopDealCard from "../components/TopDealCard";
import WeekItemScroller from "../components/WeekItemScroller";
import useLoadDeal from "../utilities/useLoadDeal";

export default function Home() {
  const isSuccess = useLoadDeal();

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
