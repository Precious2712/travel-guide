'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Plane, MapPin, Calendar } from 'lucide-react';
import planeImg from '../../../../public/1182bede-e6f1-4f7b-ae91-00abff37183e.png';

export function SearchFlight() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState<Date>(new Date());
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
    const [scrollProgress, setScrollProgress] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null);


    const formatDateTime = (date: Date) => {
        const formatted = date.toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });

        return formatted.replace(" AM", "AM").replace(" PM", "PM");
    };

    const obj = {
        origin,
        destination,
        departureDate: formatDateTime(departureDate),
        returnDate: formatDateTime(returnDate),
    }

    console.log('obj', obj);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return
            const scrollTop = containerRef.current.scrollTop
            const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight
            const progress = Math.min(scrollTop / scrollHeight, 1)
            setScrollProgress(progress)
        }

        const container = containerRef.current
        container?.addEventListener('scroll', handleScroll)
        return () => container?.removeEventListener('scroll', handleScroll)
    }, [])

    const dayColor = { r: 135, g: 206, b: 235 }
    const nightColor = { r: 15, g: 23, b: 42 }

    const currentColor = {
        r: Math.round(dayColor.r + (nightColor.r - dayColor.r) * scrollProgress),
        g: Math.round(dayColor.g + (nightColor.g - dayColor.g) * scrollProgress),
        b: Math.round(dayColor.b + (nightColor.b - dayColor.b) * scrollProgress),
    }

    const bgColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
    const overlayOpacity = 0.3 + scrollProgress * 0.5

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-screen overflow-y-scroll scroll-smooth"
            style={{ backgroundColor: bgColor, transition: 'background-color 0.1s ease' }}
        >

            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url(${planeImg.src})`,
                    opacity: 1 - scrollProgress * 0.3,
                    transition: 'opacity 0.1s ease',
                }}
            />


            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: `rgba(15, 23, 42, ${overlayOpacity})`,
                    transition: 'background-color 0.1s ease',
                }}
            />


            <div className="relative z-20 flex flex-col items-center px-4 py-20">
                <div
                    className="text-center mb-12 sticky top-20"
                    style={{ opacity: 1 - scrollProgress * 0.3, transition: 'opacity 0.1s ease' }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Plane className="w-8 h-8 text-white drop-shadow-lg" />
                        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Air Swift
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                        Find your perfect flight
                    </p>
                </div>

                <div className="w-full max-w-5xl"
                >
                    <div className="flex gap-4 mb-8 justify-center">
                        <button
                            onClick={() => setTripType('roundtrip')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${tripType === 'roundtrip'
                                ? 'bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                                : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                                }`}
                        >
                            Round Trip
                        </button>
                        <button
                            onClick={() => setTripType('oneway')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${tripType === 'oneway'
                                ? 'bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                                : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                                }`}
                        >
                            One Way
                        </button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">

                            <div
                                className="flex flex-col"
                            >
                                <label className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    From
                                </label>
                                <Input
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
                                    placeholder="Origin city or airport"
                                    className="bg-white/20  text-white placeholder:text-white/50  focus:bg-white/30 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 transition-all"
                                />
                            </div>

                            <div
                                className="flex flex-col"
                            >
                                <label className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    To
                                </label>
                                <Input
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Destination city or airport"
                                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/30 focus:border-white/50 transition-all"
                                />
                            </div>

                            <div
                                className="flex flex-col"
                            >
                                <label className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Depart
                                </label>
                                <DatePicker
                                    selected={departureDate}
                                    onChange={(date: Date | null) => date && setDepartureDate(date)}
                                    className="w-full bg-white/20 border border-white/30 rounded-md p-2.5 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/30 focus:border-white/50 transition-all"
                                    dateFormat="MMM dd, yyyy"
                                    minDate={new Date()}
                                />
                            </div>

                            {tripType === 'roundtrip' && (
                                <div
                                    className="flex flex-col"
                                >
                                    <label className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Return
                                    </label>
                                    <DatePicker
                                        selected={returnDate}
                                        onChange={(date: Date | null) => date && setReturnDate(date)}
                                        className="w-full bg-white/20 border border-white/30 rounded-md p-2.5 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/30 focus:border-white/50 transition-all"
                                        dateFormat="MMM dd, yyyy"
                                        minDate={departureDate}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center mt-8">
                            <Button className="bg-liner-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-6 rounded-full text-lg font-bold shadow-lg  transition-all transform hover:scale-105">
                                Search Flights
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
