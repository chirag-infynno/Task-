import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  data: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(state);
      state.value += action.payload.dsat;
      state.data = action.payload.dsat + state.value;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
