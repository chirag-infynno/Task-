import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url, token } from "../utils";
import axios from "axios";

const initialState = {
  status: "idle",
  data: [],
};
export const fetchapi = createAsyncThunk("cricketapi/crickets", () => {
  try {
    const response = axios.get(
      `${url}fixtures?api_token=${token}&include=localteam,visitorteam,runs,league,season  `
    );
    // console.log("data", response);
    return response;
  } catch (er) {
    console.log("nor");
  }
});

const cricketapi = createSlice({
  name: "cricketapi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchapi.pending, (state, action) => {
        state.status = "loding";
      })
      .addCase(fetchapi.fulfilled, (state, action) => {
        state.data = action.payload.data.data.slice(0, 20);
        state.status = "success";

        state.data = action.payload.data.data;
      })
      .addCase(fetchapi.rejected, (state, action) => {
        state.status = "err";
      });
  },
});

export default cricketapi.reducer;
export const data = (state) => state.cricketapislice;

// export const { increment, decrement, incrementByAmount } = counterSlice.act
