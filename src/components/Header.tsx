import { FiShoppingCart } from 'react-icons/fi';
import { FcShop } from 'react-icons/fc';
import { Cart } from '../features/cart/cart';

export type props = {
  setCartToggle : React.Dispatch<React.SetStateAction<boolean>>,
  cartToggle : boolean,
}

export default function Header({cartToggle, setCartToggle}: props) {

  return <header className='header | flex-group space-between padding-400'>
    <FcShop className='fs-700'/>
    <button className='btn' onClick={() => setCartToggle(!cartToggle)}><FiShoppingCart /></button>
    <Cart cartToggle={cartToggle} setCartToggle={setCartToggle}/>
  </header>
}