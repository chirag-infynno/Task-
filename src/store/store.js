import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterslice";
import apislice from "../store/apicall";
import cricketapislice from "./cricketapislice";
import cricketMatchApi from "./cricketmatchslice";
export const store = configureStore({
  reducer: {
    apislice: apislice,
    cricketapislice: cricketapislice,
    cricketMatchApi: cricketMatchApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
