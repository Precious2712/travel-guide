'use client';

import { useLazySearchFlightsQuery } from "@/components/counter/pokeman";

export function BookFlight() {
    const [searchFlights, { data, isLoading, error }] = useLazySearchFlightsQuery();

    console.log(data);
    

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};