import { useNavigate } from "react-router-dom";
import CartItemDetailed from "../components/cart/CartItemDetailed";
import { useAppSelector } from "../utilities/hooks";

const CartDetail = () => {
  const navigate = useNavigate();
  const { items, subtotal } = useAppSelector((state) => state.cart);

  return (
    <section className="cart-detail">
      <div className="__ad"></div>
      <div className="shopping-cart-detail">
        <header>
          <h1>Shopping Cart</h1>
          <span className="fs-400">Price</span>
          <hr />
        </header>
        <div className="cart-items-detail">
          {items.length >= 1 ? (
            items.map((item) => <CartItemDetailed {...item} key={item.id} />)
          ) : (
            <p>Empty</p>
          )}
        </div>
        <hr />
        <div>
          <div className="flex-group space-between">
            <p className="fs-500">Subtotal:</p>
            <p className="ms-3">${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <button
          data-color="orange"
          className="btn"
          onClick={() => navigate("/checkout")}
        >
          Processed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartDetail;
