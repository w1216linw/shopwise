import { Link } from "react-router-dom";
import { useAppSelector } from "../utilities/hooks";

const PopularCard = () => {
  const items = useAppSelector((state) => state.topDeals.popular);

  return (
    <div className="popularCard">
      {!items ? (
        <p>No Deals Today</p>
      ) : (
        <>
          <h1>Popular</h1>
          <div className="__img-set">
            {<img src={items[0].thumbnail} alt={items[0].title} />}
            {<img src={items[1].thumbnail} alt={items[1].title} />}
            {<img src={items[2].thumbnail} alt={items[2].title} />}
            {<img src={items[3].thumbnail} alt={items[3].title} />}
          </div>

          <Link to="/populardeal" className="__checkLink">
            Check out
          </Link>
        </>
      )}
    </div>
  );
};

export default PopularCard;
