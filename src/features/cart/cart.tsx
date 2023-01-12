import { useEffect } from 'react';
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./cartSlice";
import CartItem from '../../components/CartItem';
import { props } from "../../components/Header";
import { getTotal } from "../../utility/utilFn";

export function Cart({cartToggle, setCartToggle}: props) {
  const {quantities,items} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(quantities);
  },[quantities])

  return (
    <>
      <div className="quantities">{quantities}</div>
      <div className={`${cartToggle ? 'shopping-cart | padding-400' : 'hidden-cart'}`}>
        <h2 className="text-align-center">Your Cart: </h2>
        <div>
        {items.length < 1 ? (
          <h1>Cart is empty</h1>
          ) : (
            items.map((item) => <CartItem key={item.id} {...item}/> )
            )}
        </div>
        {
          items.length < 1 ? ' ' : (
            <div className="total-amount | flex-group space-between mt-400">
              <p>Total:</p>
              <p>${getTotal(items).toFixed(2)}</p>
            </div>
          )
        }
      </div>
    </>
  );
}
