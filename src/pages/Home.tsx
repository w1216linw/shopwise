import { useState } from "react";
import ItemList from "../components/ItemList";
import Header from "../components/Navbar";
import { useGetAllProductsQuery } from "../features/productApi/apiSlice";
import { CartItemType } from "../utilities/types";

export default function Home() {
  const [cartToggle, setCartToggle] = useState(false);

  const { data, isLoading, isError } = useGetAllProductsQuery(null);
  if (isError) return <h2>Error...</h2>;
  if (isLoading) return <h2>Loading...</h2>;
  console.log(data.products);
  return (
    <main>
      <Header cartToggle={cartToggle} setCartToggle={setCartToggle} />
      <section className="items-container">
        {data.products?.map((item: CartItemType) => (
          <ItemList key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
