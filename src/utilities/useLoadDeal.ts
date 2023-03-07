import { useEffect, useState } from "react";
import { useGetNumberOfProductsQuery } from "../features/productApi/apiSlice";
import { loadDeals } from "../features/topDeal/topDealSlice";
import { useAppDispatch } from "./hooks";
import { getDay } from "./utilFn";

const useLoadDeal = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data } = useGetNumberOfProductsQuery({
    number: 3,
    skip: getDay(),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.products) {
      dispatch(loadDeals(data.products));
      setIsSuccess(true);
    }
  }, [data]);

  return isSuccess;
};

export default useLoadDeal;
