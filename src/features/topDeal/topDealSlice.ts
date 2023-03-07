import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../utilities/types";

interface TopDealState {
  items: CartItemType[];
  highestOff: number;
}

const initialState: TopDealState = {
  items: [],
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
  },
});

export const { loadDeals } = topDealSlice.actions;
export default topDealSlice.reducer;
