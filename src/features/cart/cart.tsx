import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./cartSlice";
import CartItem from '../../components/CartItem';

export function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h1>Cart</h1>
      <button onClick={() => dispatch(increment(2))}>Click</button>
      {cartItems.length < 1 ? (
        <h1>Cart is empty</h1>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} {...item}/> )
      )}
    </div>
  );
}
