import { Link } from "react-router-dom";
import { useAppSelector } from "../utilities/hooks";

const TopDealCard = () => {
  const items = useAppSelector((state) => state.topDeals.items);
  const off = useAppSelector((state) => state.topDeals.highestOff);

  return (
    <div className="discountCard">
      {!items ? (
        <p>No Deals Today</p>
      ) : (
        <>
          <h1>Top Deal</h1>
          {<img src={items[0].thumbnail} alt={items[0].title} />}
          <div className="percentage-off | flex-group">
            <p>Up to {off}% off</p>
            <span>limited time</span>
          </div>
          <Link to="/topdeal" className="__checkLink">
            Check out
          </Link>
        </>
      )}
    </div>
  );
};

export default TopDealCard;
