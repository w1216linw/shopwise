import { useEffect, useState } from "react";
import { useGetNumberOfProductsQuery } from "../features/productApi/apiSlice";
import { loadDeals, loadPopular } from "../features/topDeal/topDealSlice";
import { useAppDispatch } from "./hooks";

type loadMethod = typeof loadDeals | typeof loadPopular;

const useLoadDeal = (number: number, skip: number, loadMethod: loadMethod) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data } = useGetNumberOfProductsQuery({
    number,
    skip,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.products) {
      dispatch(loadMethod(data.products));
      setIsSuccess(true);
    }
  }, [data]);

  return isSuccess;
};

export default useLoadDeal;
