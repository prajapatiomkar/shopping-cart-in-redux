import { createSlice } from "@reduxjs/toolkit";

//createSlice has a feature you can directly mutate the state in the reducer but in redux core you can't mutate the state directly.
// redux: return [...state, action.payload]

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
