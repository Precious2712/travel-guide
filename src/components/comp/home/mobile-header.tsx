'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Plane, Clock, Shield, Star, Sparkles, Tag, Award } from "lucide-react";
import { useState, useRef } from "react";
import { desktop } from "@/data/nav";

export function MobileHeader() {
    const [open, setOpen] = useState(false);
    const [openService, setOpenService] = useState<number | null>(null);
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const marqueeRef = useRef<HTMLDivElement>(null);

    const navigate = useRouter();

    const handleOpenNav = () => setOpen(!open);

    const toggleService = (id: number) => {
        setOpenService(openService === id ? null : id);
    };

    const toggleItem = (key: string) => {
        console.log('key-pair', key);

        setOpenItem(openItem === key ? null : key);
    };

    const getServiceIcon = (serviceName: string) => {
        switch (serviceName.toLowerCase()) {
            case 'flights':
                return <Plane size={18} className="text-sky-600" />;
            case 'services':
                return <Shield size={18} className="text-sky-600" />;
            case 'destinations':
                return <Star size={18} className="text-sky-600" />;
            default:
                return <Clock size={18} className="text-sky-600" />;
        }
    };

    const marqueeItems = [
        { icon: <Plane size={14} />, text: "New Routes to Paris & Tokyo" },
        { icon: <Tag size={14} />, text: "Summer Sale: 25% Off" },
        { icon: <Sparkles size={14} />, text: "Join SkyMiles Today" },
        { icon: <Award size={14} />, text: "Award-Winning Service" },
        { icon: <Clock size={14} />, text: "24/7 Customer Support" },
        { icon: <Star size={14} />, text: "5-Star Rated Airline" },
    ];

    const handleLogin = () => {
        navigate.replace('/login');
    };

    const handleSignup = () => {
        navigate.replace('/signup');
    };


    return (
        <div className="relative">
            <div className="flex justify-between items-center bg-linear-to-r from-sky-600 to-sky-400 py-3 px-4 fixed w-full z-50 shadow-md">
                <div className="flex items-center space-x-2">
                    <Plane className="text-white" size={20} />
                    <h1 className="font-bold text-white text-lg tracking-wide">AirSwift</h1>
                </div>

                <Button
                    onClick={handleOpenNav}
                    variant="ghost"
                    className="border border-white/20 hover:bg-white/10 text-white rounded-lg p-2"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </div>

            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <div
                className={`fixed top-0 right-0 h-screen w-[85%] bg-white pt-20 z-50 overflow-y-auto
                shadow-2xl transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >

                <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-r from-sky-600 to-sky-400 -z-10">

                    <div className="relative h-full overflow-hidden">

                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-sky-600 to-transparent z-10" />

                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-sky-400 to-transparent z-10" />

                        <div
                            ref={marqueeRef}
                            className="flex items-center h-full overflow-hidden"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div
                                className={`flex items-center space-x-8 animate-marquee whitespace-nowrap ${isPaused ? 'pause-animation' : ''}`}
                                style={{ animation: 'marquee 30s linear infinite' }}
                            >
                                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="text-white/80">{item.icon}</span>
                                        <span className="text-sm font-medium tracking-wide">{item.text}</span>
                                        <span className="text-white/40 text-xs">◆</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 px-4 py-3 mt-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Welcome back</p>
                    <p className="font-semibold text-gray-800">Traveler</p>
                </div>

                <div className="p-4 space-y-3">
                    {desktop.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                            <button
                                onClick={() => toggleService(service.id)}
                                className="w-full flex justify-between items-center p-4 font-semibold text-gray-800 hover:bg-sky-50 transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-3">
                                    {getServiceIcon(service.service)}
                                    <span>{service.service}</span>
                                </div>

                                <ChevronDown
                                    size={18}
                                    className={`text-gray-400 transition-transform duration-300 ${openService === service.id ? "rotate-180 text-sky-500" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openService === service.id ? "max-h-200" : "max-h-0"
                                    }`}
                            >
                                <div className="bg-gray-50/80">
                                    {service.dropDown.map((item) => {
                                        const key = `${service.id}-${item.id}`;

                                        return (
                                            <div key={item.id} className="border-t border-gray-100 first:border-t-0">

                                                <button
                                                    onClick={() => toggleItem(key)}
                                                    className={`w-full flex justify-between items-center p-4 text-left transition-colors duration-200
                                                        ${openItem === key ? 'bg-sky-50' : 'hover:bg-gray-100'}`}
                                                >
                                                    <span className={`font-medium ${openItem === key ? 'text-sky-700' : 'text-gray-700'}`}>
                                                        {item.itemA}
                                                    </span>

                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform duration-300 ${openItem === key ? "rotate-180 text-sky-500" : "text-gray-400"
                                                            }`}
                                                    />
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${openItem === key ? "max-h-96 p-4" : "max-h-0"
                                                        }`}
                                                >
                                                    <p className="text-sm text-gray-600 leading-relaxed">
                                                        {item.phrase}
                                                    </p>

                                                    {item.image && (
                                                        <div className="mt-3 rounded-lg overflow-hidden">
                                                            <img
                                                                src={item.image}
                                                                alt={item.itemA}
                                                                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    )}

                                                    {item.price && (
                                                        <div className="mt-3 flex items-center justify-between">
                                                            <span className="text-sm text-gray-500">Starting from</span>
                                                            <p className="font-bold text-sky-600">
                                                                {item.price}
                                                            </p>
                                                        </div>
                                                    )}

                                                    <Button
                                                        variant="link"
                                                        className="mt-2 p-0 h-auto text-sky-600 hover:text-sky-700"
                                                    >
                                                        Learn more →
                                                    </Button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-gray-200 mt-4">
                    <div className="space-y-2">
                        <Button onClick={handleLogin} className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-lg py-5">
                            Sign In
                        </Button>
                        <Button onClick={handleSignup} variant="outline" className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 rounded-lg py-5">
                            Create Account
                        </Button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-4">
                        © 2024 AirSwift. All rights reserved.
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    min-width: 200%;
                }
                
                .pause-animation {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}