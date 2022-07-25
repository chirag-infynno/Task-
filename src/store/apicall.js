import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  data: [],
};
export const fetchapi = createAsyncThunk("api/cricket", () => {
  try {
    const response = axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    console.log("data", response);
    return response;
  } catch (er) {
    console.log("nor");
  }
});

const apislice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchapi.pending, (state, action) => {
        state.status = "loding";
      })
      .addCase(fetchapi.fulfilled, (state, action) => {
        state.status = "success";
        console.log("action", action.payload.data.data);
        state.data = action.payload.data.data;
      })
      .addCase(fetchapi.rejected, (state, action) => {
        state.status = "err";
      });
  },
});

export default apislice.reducer;
export const allpost = (state) => state.apislice;

// export const { increment, decrement, incrementByAmount } = counterSlice.act
