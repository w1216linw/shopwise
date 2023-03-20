import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../utilities/types";
import { getSubtotal } from "../../utilities/utilFn";

type coupon = { title: string; off: number };

interface CartState {
  items: CartItemType[];
  quantities: number;
  coupon: coupon;
  subtotal: number;
}

const initialState: CartState = {
  items: [],
  quantities: 0,
  coupon: { title: "", off: 0 },
  subtotal: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantities += 1;
          state.subtotal += item.price;
        }
      });
      state.quantities += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.quantities >= 2) item.quantities -= 1;
          else {
            state.items = state.items.filter(
              (item) => item.id !== action.payload
            );
          }
          state.subtotal -= item.price;
        }
      });
      state.quantities -= 1;
    },
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      let inCart = false;
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantities += 1;
          state.subtotal += item.price;
          inCart = true;
        }
      });
      if (!inCart) {
        state.items.push({ ...action.payload, quantities: 1 });
        state.subtotal += action.payload.price;
      }
      state.quantities += 1;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      let itemQuan = 0;
      state.items = state.items.filter((item) => {
        if (item.id === action.payload) itemQuan = item.quantities;
        return item.id !== action.payload;
      });
      state.subtotal = getSubtotal(state.items);
      state.quantities -= itemQuan;
    },
    clearCart: (state) => {
      state.coupon = initialState.coupon;
      state.items = initialState.items;
      state.quantities = initialState.quantities;
      state.subtotal = initialState.subtotal;
    },
    addCoupon: (state, action: PayloadAction<coupon>) => {
      state.coupon = action.payload;
    },
  },
});

export const {
  increment,
  addToCart,
  decrement,
  deleteItem,
  clearCart,
  addCoupon,
} = CartSlice.actions;
export default CartSlice.reducer;
