import { RootState } from "../../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './cartSlice';

export function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={() => dispatch(increment(2))}>Click</button>
    </div>
  )
}