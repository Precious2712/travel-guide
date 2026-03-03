import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FlightResponse } from '@/data/flight-response'
import { FlightSearchResponseFrom, FlightSearchResponseTo } from '@/data/flight-location';

export const flightApi = createApi({
    reducerPath: 'flightApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),

    endpoints: (builder) => ({
        searchFlights: builder.query<FlightResponse, { from: string; to: string }>({
            query: ({ from, to }) => ({
                url: `/api/v1/search-query?from=${from}&to=${to}`,
                params: { from, to }
            })
        }),

        searchFromCities: builder.query<string[], string>({
            query: (from) => `/api/v1/search-from?from=${from}`,
            transformResponse: (response: FlightSearchResponseFrom) =>
                response.data.map((f) => f.from.city)
        }),

        searchToCities: builder.query<string[], string>({
            query: (to) => `/api/v1/search-to?to=${to}`,
            transformResponse: (response: FlightSearchResponseTo) =>
                response.data.map((f) => f.to.city)
        }),

        getFlightById: builder.query<FlightResponse, string>({
            query: (id) => `/flights/${id}`,
        }),
    }),
})

export const {
    useSearchFlightsQuery,
    useLazySearchFlightsQuery,
    useGetFlightByIdQuery,
    useSearchFromCitiesQuery,
    useSearchToCitiesQuery
} = flightApi