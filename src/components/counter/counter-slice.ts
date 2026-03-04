import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { FlightResponse } from "@/data/flight-response";

export interface FlightSearchState {
    from: string;
    to: string;
}

const initialSearchState: FlightSearchState = {
    from: "",
    to: "",
};

export const flightSearchSlice = createSlice({
    name: "flightSearch",
    initialState: initialSearchState,
    reducers: {
        setFrom: (state, action: PayloadAction<string>) => {
            state.from = action.payload;
        },
        setTo: (state, action: PayloadAction<string>) => {
            state.to = action.payload;
        },
    },
});

export const { setFrom, setTo } = flightSearchSlice.actions;


export interface BookState {
    flightBooking: FlightResponse | null;
}

const initialBookState: BookState = {
    flightBooking: null,
};

export const bookSlice = createSlice({
    name: "bookFlight",
    initialState: initialBookState,
    reducers: {
        setFlightBooking: (
            state,
            action: PayloadAction<FlightResponse>
        ) => {
            state.flightBooking = action.payload;
        }
    },
});

export const { setFlightBooking } = bookSlice.actions;


export const flightSearchReducer = flightSearchSlice.reducer;
export const bookReducer = bookSlice.reducer;