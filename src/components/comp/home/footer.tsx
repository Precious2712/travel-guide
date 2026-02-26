'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className=" text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold drop-shadow-lg">Air Swift</h2>
                    <p className="text-white/80 text-sm">
                        Your trusted flight booking platform. Explore the skies with ease and comfort. Book now and experience seamless travel.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-blue-200 transition"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-blue-200 transition"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-blue-200 transition"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-blue-200 transition"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>

                
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <a href="#" className="hover:text-blue-200 transition">Home</a>
                    <a href="#" className="hover:text-blue-200 transition">Flights</a>
                    <a href="#" className="hover:text-blue-200 transition">Destinations</a>
                    <a href="#" className="hover:text-blue-200 transition">Contact</a>
                    <a href="#" className="hover:text-blue-200 transition">About</a>
                </div>

                
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+234 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>support@airswift.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Lagos, Nigeria</span>
                    </div>
                </div>

                
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                    <p className="text-white/80 text-sm">
                        Get the latest deals and updates right in your inbox.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        />
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-white/90 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            
            <div className="border-t border-white/20 mt-10 py-4 text-center text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Air Swift. All rights reserved.
            </div>
        </footer>
    )
}