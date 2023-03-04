import { useState } from "react";
import { FcShop } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { Cart } from "../features/cart/cart";

const NavBar = () => {
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <header className="header | flex-group space-between padding-400">
      <FcShop className="fs-600" />
      <button className="btn" onClick={() => setCartToggle(!cartToggle)}>
        <FiShoppingCart />
      </button>
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
    </header>
  );
};

export default NavBar;
