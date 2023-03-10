import ad from "../assets/ad.jpg";
import CategoriesScroller from "../components/CategoriesScroller";
import PopularCard from "../components/PopularDealCard";
import TopDealCard from "../components/TopDealCard";
import WeekItemScroller from "../components/WeekItemScroller";
import useLoadDeal from "../utilities/useLoadDeal";

export default function Home() {
  const [loadTopDeal, loadPopular] = useLoadDeal();

  return (
    <main>
      <section className="home-section">
        <div className="__cate-scroller">
          <CategoriesScroller />
        </div>
        <div className="__top-deals">{loadTopDeal && <TopDealCard />}</div>
        <div className="__popular-deals">{loadPopular && <PopularCard />}</div>
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
