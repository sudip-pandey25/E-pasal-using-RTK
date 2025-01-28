const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice +=
          action.payload.price * action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
          totalPrice: action.payload.price * action.payload.quantity,
        });
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((items) => items.id == id);

      if (itemIndex >= 0) {
        const itemPrice =
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -= itemPrice;
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducers = cartSlice.reducer;

export default cartSlice;
