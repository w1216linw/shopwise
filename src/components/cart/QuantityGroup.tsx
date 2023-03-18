import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { TbTrashX } from "react-icons/tb";
import {
  decrement,
  deleteItem,
  increment,
} from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../utilities/hooks";
import { CartItemType } from "../../utilities/types";
const QuantityGroup: React.FC<CartItemType> = (cartItem) => {
  const dispatch = useAppDispatch();
  return (
    <div className="quantity-control | flex-group">
      <div className="flex-group">
        <button
          onClick={() => dispatch(decrement(cartItem.id))}
          className="hidden-border-btn"
        >
          <AiOutlineMinusSquare size="20" />
        </button>
        <p>{cartItem.quantities}</p>
        <button
          onClick={() => dispatch(increment(cartItem.id))}
          className="hidden-border-btn"
        >
          <AiOutlinePlusSquare size="20" />
        </button>
      </div>
      <button
        className="hidden-border-btn"
        onClick={() => dispatch(deleteItem(cartItem.id))}
      >
        <TbTrashX size="20" />
      </button>
    </div>
  );
};

export default QuantityGroup;
