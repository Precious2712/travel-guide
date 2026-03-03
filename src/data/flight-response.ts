export interface FlightResponse {
    success: boolean;
    count: number;
    data: Flight[];
}

// Flight object
export interface Flight {
    _id: string;
    airline: string;
    flightNumber: string;
    aircraft: Aircraft;
    seatClasses: SeatClasses;
    from: Airport;
    to: string;
    departureTime: string; // ISO date string
    arrivalTime: string; // ISO date string
    duration: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Aircraft
export interface Aircraft {
    model: string;
    seatLayout: string;
}

// Seat classes container
export interface SeatClasses {
    economy: SeatClass;
    business: SeatClass;
    firstClass: SeatClass;
}

// Single seat class
export interface SeatClass {
    totalSeats: number;
    availableSeats: number;
    _id: string;
}

// Airport (from)
export interface Airport {
    _id: string;
    code: string;
    name: string;
    city: string;
    country: string;
    timezone: string;
    location: Location;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Location coordinates
export interface Location {
    latitude: number;
    longitude: number;
}