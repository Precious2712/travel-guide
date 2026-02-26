'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlightImage } from './flight-image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    return (
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-2 border-primary/30 opacity-60" />


                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border-2 border-accent/40 opacity-50" />


                <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-secondary/10 blur-2xl opacity-40" />


                <div className="absolute top-1/3 -right-16 w-48 h-48 rounded-full border-2 border-muted/30 opacity-40" />


                <div className="absolute -bottom-20 right-1/4 w-40 h-40 rounded-3xl border-2 border-primary/20 opacity-30 rotate-45" />


                <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    <div className="flex-1 space-y-6">

                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-linear-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-sm font-semibold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                Book with Confidence
                            </span>
                        </motion.div>



                        <div className="space-y-3">
                            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold text-pretty leading-tight">
                                Discover Your Next Adventure
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                Find the best flights at unbeatable prices. Compare, book, and fly in minutes with our intuitive platform.
                            </p>
                        </div>


                        <div className="space-y-3 pt-2">
                            {[
                                'Best Price Guarantee',
                                'Instant Booking Confirmation',
                                '24/7 Customer Support'
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                    <span className="text-white font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col gap-4 w-full">
                            <Link href="/signup" className="w-full">
                                <Button
                                    variant="ghost"
                                    className="w-full h-12 bg-green-600 hover:bg-primary/90 text-primary-foreground
        px-4 py-2 text-base font-semibold rounded-lg inline-flex items-center
        justify-center gap-2 group transition-all duration-300
        hover:gap-3 hover:shadow-lg hover:scale-[1.02]
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
        focus:ring-offset-background"
                                >
                                    Sign up
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>

                            <Link href="/login" className="w-full">
                                <Button
                                    variant="ghost"
                                    className="w-full h-12 bg-blue-600 hover:bg-primary/90 text-primary-foreground
        px-4 py-2 text-base font-semibold rounded-lg inline-flex items-center
        justify-center gap-2 group transition-all duration-300
        hover:gap-3 hover:shadow-lg hover:scale-[1.02]
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
        focus:ring-offset-background"
                                >
                                    Sign in
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex-1 w-full flex items-center justify-center mt-12">
                        <FlightImage />
                    </div>
                </div>
            </div>
        </section>
    );
}
