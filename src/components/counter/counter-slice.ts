import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    from: string
    to: string
}

const initialState: CounterState = {
    from: '',
    to: '',
}

export const flightSearchSlice = createSlice({
    name: 'flightSearch',
    initialState,
    reducers: {
        setFrom: (state, action: PayloadAction<string>) => {
            state.from = action.payload
        },

        setTo: (state, action: PayloadAction<string>) => {
            state.to = action.payload
        },
    },
})


export const { setTo, setFrom } = flightSearchSlice.actions

export default flightSearchSlice.reducer