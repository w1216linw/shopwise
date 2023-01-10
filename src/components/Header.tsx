import { FiShoppingCart } from 'react-icons/fi';
import { FcShop } from 'react-icons/fc';
import { Cart } from '../features/cart/cart';

export default function Header() {
  return <header className='| flex-group space-between padding-400'>
    <FcShop className='fs-700'/>
    <button><FiShoppingCart /></button>
    <Cart />
  </header>
}