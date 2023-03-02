import { FcShop } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { Cart } from "../features/cart/cart";

export type NavBarProps = {
  setCartToggle: React.Dispatch<React.SetStateAction<boolean>>;
  cartToggle: boolean;
};

export default function NavBar({ cartToggle, setCartToggle }: NavBarProps) {
  return (
    <header className="header | flex-group space-between padding-400">
      <FcShop className="fs-600" />
      <button className="btn" onClick={() => setCartToggle(!cartToggle)}>
        <FiShoppingCart />
      </button>
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
    </header>
  );
}
