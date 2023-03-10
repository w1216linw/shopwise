import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../utilities/hooks";
import { getTotal } from "../utilities/utilFn";
import CartItem from "./CartItem";

interface CartProps {
  cartToggle: boolean;
  setCartToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ cartToggle, setCartToggle }) => {
  const { quantities, items } = useAppSelector((state) => state.cart);

  const closeCart = () => {
    setCartToggle(!cartToggle);
  };

  return (
    <>
      <div className="quantities">{quantities}</div>
      <div
        onClick={() => closeCart()}
        className={`${cartToggle ? "cart_background" : "hidden-cart"}`}
      ></div>
      <div
        className={`${
          cartToggle ? "shopping-cart | padding-400" : "hidden-cart"
        }`}
      >
        <h2 className="text-align-center">Your Cart: </h2>
        {items.length < 1 ? (
          <h1>Cart is empty</h1>
        ) : (
          items.map((item) => <CartItem key={item.id} {...item} />)
        )}
        {items.length < 1 ? (
          " "
        ) : (
          <>
            <div className="total-amount | flex-group space-between mt-400">
              <p className="fs-500">Total:</p>
              <p>${getTotal(items).toFixed(2)}</p>
            </div>
            <Link
              className="btn text-align-center"
              data-color="orange"
              to="/checkout"
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
