import ItemList from "../components/ItemList";
import Layout from "../components/Layout";
import { useAppSelector } from "../utilities/hooks";

const TopDeal = () => {
  const items = useAppSelector((state) => state.topDeals.items);
  console.log(items);
  return (
    <Layout>
      <div className="items-container">
        {items.map((item) => (
          <ItemList key={item.id} item={item} discount />
        ))}
      </div>
    </Layout>
  );
};

export default TopDeal;
