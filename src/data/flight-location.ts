
export interface FlightLocation {
  _id: string
  code: string
  name: string
  city: string
  country: string
  timezone: string
  location: {
    latitude: number
    longitude: number
  }
  createdAt: string
  updatedAt: string
}

export interface SeatClass {
  totalSeats: number
  availableSeats: number
  price?: number
  _id: string
}

export interface SeatClasses {
  economy?: SeatClass
  business?: SeatClass
  firstClass?: SeatClass
}

export interface Aircraft {
  model: string
  seatLayout: string
}

export interface FlightFromResponseItem {
  _id: string
  airline: string
  flightNumber: string
  from: FlightLocation
  to: string 
  departureTime: string
  arrivalTime: string
  duration: string
  status: string
  aircraft: Aircraft
  seatClasses: SeatClasses
  createdAt: string
  updatedAt: string
}

export interface FlightToResponseItem {
  _id: string
  airline: string
  flightNumber: string
  from: string 
  to: FlightLocation
  departureTime: string
  arrivalTime: string
  duration: string
  status: string
  aircraft: Aircraft
  seatClasses: SeatClasses
  createdAt: string
  updatedAt: string
}

export interface FlightSearchResponseFrom {
  success: boolean
  count: number
  data: FlightFromResponseItem[]
}

export interface FlightSearchResponseTo {
  success: boolean
  count: number
  data: FlightToResponseItem[]
}