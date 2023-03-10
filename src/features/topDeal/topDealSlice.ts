import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../utilities/types";

interface TopDealState {
  items: CartItemType[];
  popular: CartItemType[];
  highestOff: number;
}
const initialState: TopDealState = {
  items: [],
  popular: [],
  highestOff: 0,
};

export const topDealSlice = createSlice({
  name: "topDeal",
  initialState,
  reducers: {
    loadDeals: (state, action: PayloadAction<CartItemType[]>) => {
      if (action.payload) {
        state.items = action.payload;
        state.highestOff = action?.payload.reduce((acc, elem) => {
          acc = Math.max(acc, Math.floor(elem.discountPercentage));
          return acc;
        }, 0);
      }
    },
    loadPopular: (state, action: PayloadAction<CartItemType[]>) => {
      if (action.payload) {
        state.popular = action.payload;
      }
    },
  },
});

export const { loadDeals, loadPopular } = topDealSlice.actions;
export default topDealSlice.reducer;
