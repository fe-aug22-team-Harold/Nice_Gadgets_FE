import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import phonesReducer from '../features/phonesSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable */
// @typescript-eslint/indent
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
