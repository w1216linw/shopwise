import { useEffect, useState } from "react";
import { useGetNumberOfProductsQuery } from "../features/productApi/apiSlice";
import { loadDeals, loadPopular } from "../features/topDeal/topDealSlice";
import { useAppDispatch } from "./hooks";
import { getDay } from "./utilFn";

const useLoadDeal = () => {
  const [isLoadTopDeal, setIsLoadTopDeal] = useState(false);
  const [isLoadPopular, setIsLoadPopular] = useState(false);
  const { data } = useGetNumberOfProductsQuery({
    number: 3,
    skip: getDay(),
  });

  const { data: popular } = useGetNumberOfProductsQuery({
    number: 4,
    skip: 70,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.products) {
      dispatch(loadDeals(data.products));
      setIsLoadTopDeal(true);
    }

    if (popular?.products) {
      dispatch(loadPopular(popular.products));
      setIsLoadPopular(true);
    }
  }, [data]);

  return [isLoadTopDeal, isLoadPopular];
};

export default useLoadDeal;
