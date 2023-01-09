import getProducts from "./utility/getProducts";
import { CartItemType } from "./utility/types";
import {useQuery} from 'react-query';
import ItemList from "./components/ItemList";
import Header from "./components/Header";

export default function App () {

  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts,
  )

  if(error) return <h2>Error...</h2>
  if(isLoading) return <h2>Loading...</h2>

  return <main>
    <Header />
    <section>
      {data?.map(item => <ItemList key={item.id} {...item}/> )}
    </section>
  </main>

}