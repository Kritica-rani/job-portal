import { configureStore } from "@reduxjs/toolkit";
import jobportalSlice from "../features/jobportal/jobportalSlice";

export const store = configureStore({
  reducer: {
    jobportal: jobportalSlice,
  },
});
