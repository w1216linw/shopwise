import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utilities/hooks";
import CartItem from "./CartItemPreview";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { items, subtotal } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="shopping-cart | padding-4">
        <h2 className="text-align-center">Your Cart: </h2>
        {items.length < 1 ? (
          <h1>Empty</h1>
        ) : (
          items.map((item) => <CartItem key={item.id} {...item} />)
        )}
        {items.length >= 1 && (
          <>
            <div className="total-amount | flex-group space-between">
              <p className="fs-500">Subtotal:</p>
              <p className="ms-3">${subtotal.toFixed(2)}</p>
            </div>
            <Link
              className="btn text-align-center"
              data-color="orange"
              to="/cart"
            >
              Go To Cart
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
