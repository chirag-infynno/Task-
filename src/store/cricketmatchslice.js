import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url, token } from "../utils";
import axios from "axios";

const initialState = {
  status: "idle",
  apidata: null,
  localteamid: null,
  visitorteamid: null,
  visitorteamdata: null,
  localteamdata: null,
  didnotplayvisitorteam: null,
};

export const fetchMatchApi = createAsyncThunk("cricketapi/cricket", (id) => {
  try {
    const response = axios.get(
      `${url}fixtures/${id}?api_token=${token}&include=bowling,batting,runs,lineup,localteam,visitorteam,batting.batsman,bowling.bowler,batting.bowler,balls,batting.catchstump,balls.team,scoreboards`
    );
    // console.log("data", response);
    return response;
  } catch (er) {
    console.log("nor");
  }
});

const cricketMatchApi = createSlice({
  name: "cricketapi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMatchApi.pending, (state, action) => {
      state.status = "loding";
    });
    builder
      .addCase(fetchMatchApi.fulfilled, (state, action) => {
        state.apidata = action.payload.data.data;
        state.localteamid = action.payload.data.data.localteam_id;
        state.visitorteamid = action.payload.data.data.visitorteam_id;
        state.localteamdata = action.payload.data.data.batting.filter(
          (data) => {
            return data.team_id == action.payload.data.data.localteam_id;
          }
        );
        state.visitorteamdata = action.payload.data.data.batting.filter(
          (data) => {
            return data.team_id == action.payload.data.data.visitorteam_id;
          }
        );

        // const setdata = action.payload.data?.data.lineup.filter(
        //   (teamdata) => {
        //     const player = action.payload.data?.data.batting.every(
        //       (bestmen) =>
        //         teamdata.id !== bestmen.player_id &&
        //         teamdata.lineup.team_id ==
        //           action.payload.data.data.visitorteam_id
        //     );
        //     player && wisiterteamdata.push(teamdata.fullname);
        //   }
        // );

        state.status = "success";
      })
      .addCase(fetchMatchApi.rejected, (state, action) => {
        state.status = "err";
      });
  },
});

export default cricketMatchApi.reducer;
