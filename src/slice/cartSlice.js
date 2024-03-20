import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // For add items in cart
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // For remove specific item from cart
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => {
        item.card.info.id === action.payload;
      });

      state.items.splice(index, 1);
    },

    // For clear all items from cart
    clearItems: (state, action) => {
      state.items.length = 0;

      // Both way is valid
      // return { items: [] }
    },
  },
});

export const { addItem, removeItem ,clearItems } = cartSlice.actions;
export default cartSlice.reducer;