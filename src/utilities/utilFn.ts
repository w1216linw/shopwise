import { CartItemType } from "./types";

const hideLongText = (title: string): string => {
  let arr = title.split(" ");
  if (arr.length > 8) {
    return arr.slice(0, 7).join(" ") + "...";
  }
  return title;
};

const getSubtotal = (items: CartItemType[]) => {
  let total = items.reduce((acc, item) => {
    acc += item.price * item.quantities;
    return acc;
  }, 0);

  return total;
};

const getDay = (): number => {
  const date = new Date().getDay() * 5;
  return date;
};

const calPercentage = (val: number, per: number) => {
  return [val, Math.round((val / 100) * per)];
};

const findInDeal = (items: CartItemType[], item: CartItemType) => {
  return items.find((elem) => elem.id === item.id);
};

export { hideLongText, getSubtotal, getDay, calPercentage, findInDeal };
