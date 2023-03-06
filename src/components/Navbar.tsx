import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const NavBar = () => {
  const [cartToggle, setCartToggle] = useState(false);

  return (
    <header className="header | flex-group space-between padding-400">
      <Link to="/" className="logo">
        ShopWise
      </Link>
      <button className="btn" onClick={() => setCartToggle(!cartToggle)}>
        <FiShoppingCart />
      </button>
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
    </header>
  );
};

export default NavBar;
