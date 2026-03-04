export interface FlightResponse {
    success: boolean;
    count: number;
    data: Flight[];
}


export interface Flight {
    _id: string;
    airline: string;
    flightNumber: string;
    aircraft: Aircraft;
    seatClasses: SeatClasses;
    from: Airport;
    to: Airport;
    departureTime: string; 
    arrivalTime: string; 
    duration: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface Aircraft {
    model: string;
    seatLayout: string;
}


export interface SeatClasses {
    economy: SeatClass;
    business: SeatClass;
    firstClass: SeatClass;
}


export interface SeatClass {
    totalSeats: number;
    availableSeats: number;
    _id: string;
}

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


export interface Location {
    latitude: number;
    longitude: number;
}