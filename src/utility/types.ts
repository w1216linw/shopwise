export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: {rate: number, count: number};
  quantities: number;
}