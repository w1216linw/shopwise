import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../utility/types";

interface CartState {
  items: CartItemType[];
  quantities: number;
}

const initialState: CartState = {
  items: [],
  quantities: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.items.map(item => {
        if(item.id === action.payload){
          item.quantities += 1;
        }
      })
      state.quantities += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          if(item.quantities >= 2)
            item.quantities -= 1;
          else {
            state.items = state.items.filter((item) => item.id !== action.payload);
          }
        } 
      });
      state.quantities -= 1;
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
      state.quantities += 1;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      let itemQuan = 0;
      state.items = state.items.filter((item) => {
        if(item.id === action.payload)
          itemQuan = item.quantities;
        return item.id !== action.payload });
      
        state.quantities -= itemQuan;
    },
  },
});

export const { increment, addToCart, decrement, deleteItem } =
  CartSlice.actions;
export default CartSlice.reducer;
