import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import { FcCdLogo } from "react-icons/fc";

export default function Checkout () {

  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <div>
      checkout
    </div>
  )
}