import { CartItemType } from "./types";

const hideLongText = (title: string) : string => {
  let arr = title.split(' ');
  if(arr.length > 8){
    return arr.slice(0,7).join(' ') + '...';
  }
  return title;
}

const getTotal = (items: CartItemType[]) => {
  let total = items.reduce((acc, item) => {
    acc += item.price * item.quantities;
    return acc;
  }, 0)

  return total;
}

export { hideLongText, getTotal };