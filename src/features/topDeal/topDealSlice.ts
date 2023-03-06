import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../utilities/types";

interface TopDealState {
  items: CartItemType[];
}

const initialState: TopDealState = {
  items: [],
};

export const topDealSlice = createSlice({
  name: "topDeal",
  initialState,
  reducers: {
    loadDeals: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { loadDeals } = topDealSlice.actions;
export default topDealSlice.reducer;
