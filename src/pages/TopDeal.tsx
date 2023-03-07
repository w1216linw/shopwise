import ItemList from "../components/ItemList";
import TimeCounter from "../components/timeCounter";
import { useAppSelector } from "../utilities/hooks";

const TopDeal = () => {
  const items = useAppSelector((state) => state.topDeals.items);

  return (
    <>
      <TimeCounter />
      <div className="items-container">
        {items.map((item) => (
          <ItemList key={item.id} item={item} discount />
        ))}
      </div>
    </>
  );
};

export default TopDeal;
