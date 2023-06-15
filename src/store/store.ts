import userReducer from "./authorization/authSlice"; 
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});


export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;