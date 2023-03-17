import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utilities/hooks";
import Cart from "../cart/Cart";

const NavBar = () => {
  const [cartToggle, setCartToggle] = useState(false);
  const quantities = useAppSelector((state) => state.cart.quantities);

  return (
    <header className="header | flex-group space-between">
      <Link to="/" className="logo">
        ShopWise
      </Link>
      <div
        className="cart-btn-wrapper"
        onClick={() => setCartToggle(!cartToggle)}
      >
        <button className="__cart-btn">
          <CiShoppingCart size={35} />
        </button>
        <div className="quantities">{quantities}</div>
      </div>
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
    </header>
  );
};

export default NavBar;
