import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { NavBarProps } from "../../components/Navbar";
import { RootState } from "../../store/store";
import { getTotal } from "../../utility/utilFn";

export function Cart({ cartToggle, setCartToggle }: NavBarProps) {
  const { quantities, items } = useSelector((state: RootState) => state.cart);

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
}
