import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./doctorslice";
import medicineReducer from "./medicineslice";
import blogReducer from "./blogslice";
import newsReducer from "./newsslice";

export const store = configureStore({
  reducer: {
    doctorReducer: doctorReducer,
    medicineReducer: medicineReducer,
    blogReducer: blogReducer,
    newsReducer: newsReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});


