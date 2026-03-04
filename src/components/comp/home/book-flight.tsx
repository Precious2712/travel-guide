'use client';

import { useSelector } from "react-redux";
import type { RootState } from "@/components/store/store";
import { useRouter } from "next/navigation";
import { FlightResponse, Flight } from "@/data/flight-response";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";
import { Footer } from "./footer";

export function BookFlight() {
    const router = useRouter();

    const flightBooking = useSelector(
        (state: RootState) => state.userFlightBooking.flightBooking
    ) as FlightResponse;

    if (!flightBooking?.data?.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-2xl font-semibold text-gray-700">
                    No flights available
                </h1>
            </div>
        );
    }

    const handleSelectSeat = (flightId: string) => {
        router.push(`/book/${flightId}/select-seat`);
    };

    const flights = flightBooking.data;

    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-blue-900">

            <div className="hidden lg:block fixed top-0 w-full z-50">
                <DesktopHeader />
            </div>

            <div className="block lg:hidden">
                <MobileHeader />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 pt-24">
                <div className="grid gap-6">

                    {flights.map((flight: Flight) => (
                        <div
                            key={flight._id}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >

                            <div className="bg-linear-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
                                <div className="flex items-center justify-between">

                                    <div>
                                        <h2 className="text-3xl font-bold">
                                            {flight.flightNumber}
                                        </h2>

                                        <p className="text-blue-100 mt-1">
                                            {flight.airline}
                                        </p>

                                        <p className="text-blue-200 text-sm mt-1">
                                            {flight.aircraft.model}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                            <span className="font-semibold text-sm">
                                                {flight.status}
                                            </span>
                                        </div>

                                        <p className="text-blue-100 mt-3 text-sm">
                                            Aircraft Layout: {flight.aircraft.seatLayout}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="px-8 py-8">

                                <div className="mb-12">
                                    <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-6">
                                        Route Details
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                        <div className="space-y-3">
                                            <p className="text-xs font-semibold text-slate-500 uppercase">
                                                Departure
                                            </p>

                                            <div>
                                                <p className="text-3xl font-bold text-slate-900">
                                                    {flight.from.code}
                                                </p>

                                                <p className="text-lg font-medium text-slate-700 mt-1">
                                                    {flight.from.name}
                                                </p>

                                                <p className="text-sm text-slate-600 mt-1">
                                                    {flight.from.city}, {flight.from.country}
                                                </p>

                                                <p className="text-xs text-slate-500 mt-2">
                                                    {new Date(flight.departureTime).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center">
                                            <p className="text-xs font-semibold text-slate-500 uppercase mb-3">
                                                Duration
                                            </p>

                                            <div className="flex items-center w-full mb-4">
                                                <div className="h-1 flex-1 bg-linear-to-r from-blue-600 to-transparent"></div>

                                                <span className="px-4 text-sm font-semibold text-slate-900">
                                                    {flight.duration}
                                                </span>

                                                <div className="h-1 flex-1 bg-linear-to-l from-blue-600 to-transparent"></div>
                                            </div>

                                            <p className="text-xs text-slate-500">
                                                Nonstop
                                            </p>
                                        </div>

                                        <div className="space-y-3 md:text-right">
                                            <p className="text-xs font-semibold text-slate-500 uppercase">
                                                Arrival
                                            </p>

                                            <div>
                                                <p className="text-3xl font-bold text-slate-900">
                                                    {flight.to.code}
                                                </p>

                                                <p className="text-lg font-medium text-slate-700 mt-1">
                                                    {flight.to.name}
                                                </p>

                                                <p className="text-sm text-slate-600 mt-1">
                                                    {flight.to.city}, {flight.to.country}
                                                </p>

                                                <p className="text-xs text-slate-500 mt-2">
                                                    {new Date(flight.arrivalTime).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-200">

                                    <p className="text-sm text-slate-600 mb-4 font-semibold">
                                        Seat Availability
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">

                                        <div className="bg-gray-50 p-4 rounded-lg border">
                                            Economy: {flight?.seatClasses?.economy?.availableSeats} / {flight.seatClasses.economy.totalSeats}
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg border">
                                            Business: {flight?.seatClasses?.business?.availableSeats} / {flight?.seatClasses?.business?.totalSeats}
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg border">
                                            First Class: {flight?.seatClasses?.firstClass?.availableSeats} / {flight?.seatClasses?.firstClass?.totalSeats}
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => handleSelectSeat(flight._id)}
                                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                                    >
                                        Select & Book
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Footer />
        </main>
    );
}