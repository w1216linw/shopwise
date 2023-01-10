import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../utility/types";
import ItemList from "../../components/ItemList";

interface CartState {
  items: CartItemType[];
  quantities: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  quantities: 0,
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      // state.items.map((item) => {
      //   console.log(item.title);
      // });
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          console.log(item.title);
        }
      });
    },
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      let inCart = false;
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantities += 1;
          inCart = true;
        }
      });
      if (!inCart) state.items.push({ ...action.payload, quantities: 1 });
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { increment, addToCart, decrement, deleteItem } =
  CartSlice.actions;
export default CartSlice.reducer;
