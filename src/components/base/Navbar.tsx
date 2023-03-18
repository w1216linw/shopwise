import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utilities/hooks";
import Cart from "../cart/Cart";

const NavBar = () => {
  const navigate = useNavigate();
  const quantities = useAppSelector((state) => state.cart.quantities);

  return (
    <header className="header | flex-group space-between">
      <Link to="/" className="logo">
        ShopWise
      </Link>
      <div className="cart-btn-wrapper">
        <button
          className="__cart-btn | hidden-border-btn"
          onClick={() => navigate("/cart")}
        >
          <CiShoppingCart size={35} />
        </button>
        <div className="quantities">{quantities}</div>
        <Cart />
      </div>
    </header>
  );
};

export default NavBar;
