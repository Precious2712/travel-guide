'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlightImage } from './flight-image';
import { motion } from 'framer-motion';

export function HeroSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    return (
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
            {/* Abstract Geometric Shapes Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Large purple circle - top right */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-2 border-primary/30 opacity-60" />

                {/* Large yellow circle - bottom left */}
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border-2 border-accent/40 opacity-50" />

                {/* Medium violet circle - top left */}
                <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-secondary/10 blur-2xl opacity-40" />

                {/* Small accent circle - right side */}
                <div className="absolute top-1/3 -right-16 w-48 h-48 rounded-full border-2 border-muted/30 opacity-40" />

                {/* Decorative square - bottom right */}
                <div className="absolute -bottom-20 right-1/4 w-40 h-40 rounded-3xl border-2 border-primary/20 opacity-30 rotate-45" />

                {/* Floating circle center */}
                <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-accent/5 backdrop-blur-sm border border-accent/20 opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8">
                {/* Parent Flex Container - Center Items */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    {/* Text Section */}
                    <div className="flex-1 space-y-6">
                        {/* Badge */}
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


                        {/* Heading */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-pretty leading-tight">
                                Discover Your Next Adventure
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                Find the best flights at unbeatable prices. Compare, book, and fly in minutes with our intuitive platform.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 pt-2">
                            {[
                                'Best Price Guarantee',
                                'Instant Booking Confirmation',
                                '24/7 Customer Support'
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                    <span className="text-foreground font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col justify-center gap-4">
                            <Button
                            variant='ghost'
                            className="h-9 bg-green-600 hover:bg-primary/90 text-primary-foreground
                            px-0 py-0 text-base font-semibold rounded-lg inline-flex items-center
                            gap-2 group transition-all duration-300

                            hover:gap-3 hover:shadow-lg hover:scale-[1.02]
                            active:scale-95

                            focus:outline-none
                            focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                            focus:ring-offset-background"
                            >
                                Sign up
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                            variant='ghost'
                            className="bg-blue-600 h-9 hover:bg-primary/90 text-primary-foreground
                                px-0 py-0 text-base font-semibold rounded-lg inline-flex items-center
                                gap-2 group transition-all duration-300

                                hover:gap-3 hover:shadow-lg hover:scale-[1.02]
                                active:scale-95

                                focus:outline-none
                                focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                                focus:ring-offset-background"
                            >
                                Sign in
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 w-full flex items-center justify-center mt-12">
                        <FlightImage />
                    </div>
                </div>
            </div>
        </section>
    );
}
