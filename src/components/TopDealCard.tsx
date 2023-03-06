import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetNumberOfProductsQuery } from "../features/productApi/apiSlice";
import { loadDeals } from "../features/topDeal/topDealSlice";
import { useAppDispatch } from "../utilities/hooks";
import { getDay } from "../utilities/utilFn";

const TopDealCard = () => {
  const { data, isSuccess } = useGetNumberOfProductsQuery({
    number: 3,
    skip: getDay(),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadDeals(data?.products));
  }, [data]);

  return (
    <div className="discountCard">
      {" "}
      {!data ? (
        <p>No Deals Today</p>
      ) : (
        <>
          <h1>Top Deal</h1>
          {
            <img
              src={data.products[0].thumbnail}
              alt={data.products[0].title}
            />
          }
          <Link to="/topdeal" className="__checkLink">
            Check out
          </Link>
        </>
      )}
    </div>
  );
};

export default TopDealCard;
