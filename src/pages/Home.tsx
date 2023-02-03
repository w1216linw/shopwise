import { useState } from "react";
import { useQuery } from "react-query";
import { CartItemType } from "../utility/types";
import getProducts from "../utility/getProducts";
import ItemList from "../components/ItemList";
import Header from "../components/Header";

export default function Home () {
  const [cartToggle, setCartToggle] = useState(false);

  const { data, status, error } = useQuery<CartItemType[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (status === "error") return <h2>Error...</h2>;
  if (status === "loading") return <h2>Loading...</h2>;

  return (
    <main className={cartToggle ? "disable-scroll" : ""}>
      <Header cartToggle={cartToggle} setCartToggle={setCartToggle} />
      <section className="items-container">
        {data?.map((item) => (
          <ItemList key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}