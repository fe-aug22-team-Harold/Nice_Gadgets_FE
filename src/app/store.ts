import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import phonesReducer from '../features/phonesSlice';
import phonesPageReducer from '../features/allPhonesSlice';
import favoritesReducer from '../features/favoritesSlice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    phonesPage: phonesPageReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
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
