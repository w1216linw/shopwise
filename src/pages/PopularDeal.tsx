import ItemList from "../components/ItemList";
import { useAppSelector } from "../utilities/hooks";

const PopularDeal = () => {
  const items = useAppSelector((state) => state.topDeals.popular);

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <ItemList key={item.id} item={item} discount />
        ))}
      </div>
    </>
  );
};

export default PopularDeal;
