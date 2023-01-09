import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from '../../utility/types';

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
      return state
      // state.items.map((item) => {
      //   console.log(item.title);
      // });
    },
  },
});

export const { increment } = CartSlice.actions;
export default CartSlice.reducer;