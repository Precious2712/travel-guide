import { configureStore } from "@reduxjs/toolkit";
import flightSearchReducer from '../counter/counter-slice';
import { flightApi } from "../counter/pokeman";

export const store = configureStore({
    reducer: {
        flightSearch: flightSearchReducer,
        [flightApi.reducerPath]: flightApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flightApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;