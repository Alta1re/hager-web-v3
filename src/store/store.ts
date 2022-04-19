import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertSlice from "store/alertReducer";

export const store = configureStore({
  reducer: {
    alert: alertSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
