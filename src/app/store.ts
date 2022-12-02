/* eslint-disable */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import Reducer from '../features/Slice';

export const store = configureStore({
    reducer: {
        // goods: Reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
/* eslint-disable */