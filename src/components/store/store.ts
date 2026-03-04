import { configureStore } from "@reduxjs/toolkit";
import { flightApi } from "../counter/pokeman";
import { flightSearchReducer, bookReducer } from "../counter/counter-slice";

export const store = configureStore({
    reducer: {
        flightSearch: flightSearchReducer,
        [flightApi.reducerPath]: flightApi.reducer,
        userFlightBooking: bookReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(flightApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;