import { useState } from "react";
import { CartItemType } from "../utility/types";
import ItemList from "../components/ItemList";
import Header from "../components/Header";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";

export default function Home () {
  const [cartToggle, setCartToggle] = useState(false);

  const { data, isLoading, isError } = useGetAllProductsQuery(null);

  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <main>
      <Header cartToggle={cartToggle} setCartToggle={setCartToggle} />
      <section className="items-container">
        {data?.map((item: CartItemType) => (
          <ItemList key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}