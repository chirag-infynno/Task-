import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterslice";
import apislice from "../store/apicall";
export const store = configureStore({
  reducer: { apislice: apislice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
