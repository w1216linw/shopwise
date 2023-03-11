import ad from "../assets/ad.jpg";
import CategoriesScroller from "../components/CategoriesScroller";
import PopularCard from "../components/PopularDealCard";
import TopDealCard from "../components/TopDealCard";
import WeekItemScroller from "../components/WeekItemScroller";
import { loadDeals, loadPopular } from "../features/topDeal/topDealSlice";
import useLoadDeal from "../utilities/useLoadDeal";
import { getDay } from "../utilities/utilFn";

export default function Home() {
  const topDeal = useLoadDeal(3, getDay(), loadDeals);
  const popularDeal = useLoadDeal(4, 80, loadPopular);

  return (
    <main>
      <section className="home-section">
        <div className="__cate-scroller">
          <CategoriesScroller />
        </div>
        <div className="__top-deals">{topDeal && <TopDealCard />}</div>
        <div className="__popular-deals">{popularDeal && <PopularCard />}</div>
        <div className="__ad">
          <img src={ad} alt="shop ad" />
        </div>
        <div className="__week-deals">
          <WeekItemScroller />
        </div>
      </section>
    </main>
  );
}
