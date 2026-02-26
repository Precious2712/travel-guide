'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { flightSteps } from "@/data/field";

type Step = {
    title: string;
    description: string;
    image: string;
    card: string;
    bg: string;
    accentColor?: string;
    stats?: { label: string; value: string }[];
    badge?: string;
};

export function FlightScrollSection() {
    return (
        <section className="max-w-7xl mx-auto space-y-[25vh] pb-10">
            {flightSteps.map((step, index) => (
                <Panel key={step.title} step={step} index={index} />
            ))}
        </section>
    );
}

type PanelProps = {
    step: Step;
    index: number;
};

function Panel({ step, index }: PanelProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 60%"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);
    const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.02em", "0.02em"]);

    return (
        <div
            ref={ref}
            className="h-[75vh] sticky top-[12.5vh]"
            style={{ zIndex: 10 + index }}
        >
            <motion.div
                style={{
                    y,
                    scale,
                    backgroundColor: step.bg,
                    opacity,
                }}
                className="h-full flex items-center rounded-3xl overflow-hidden shadow-2xl relative"
            >

                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-black/5 pointer-events-none" />


                <div className="w-1/2 px-16 relative z-10">

                    {step.badge && (
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                            style={{
                                backgroundColor: step.accentColor || 'rgba(255,255,255,0.2)',
                                color: step.bg === '#0f172a' ? '#fff' : '#1a1a1a'
                            }}
                        >
                            {step.badge}
                        </motion.span>
                    )}


                    <motion.h1
                        style={{ letterSpacing }}
                        className="text-gray-700 text-5xl lg:text-6xl font-black mb-6 leading-tight"
                    >
                        {step.title.split(' ').map((word, i, arr) => (
                            <span key={i} className="block">
                                {word}
                                {i === 0 && <span className="text-green-400 ml-2">●</span>}
                            </span>
                        ))}
                    </motion.h1>


                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-600 mb-8 leading-relaxed"
                    >
                        {step.description.split(' ').map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.02) }}
                                className="inline-block mr-1"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>


                    {step.stats && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-8"
                        >
                            {step.stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}


                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="absolute bottom-12 right-12 text-6xl opacity-10 font-serif"
                    >
                        ✈︎
                    </motion.div>
                </div>

                <div className="w-1/2 h-full relative">

                    <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/10 z-10" />
                    <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                    />


                    <motion.div
                        className="absolute w-72 rounded-2xl shadow-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        initial={{ y: 60, opacity: 0, rotate: -5 }}
                        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200
                        }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                    >
                        <img
                            src={step.card}
                            alt=""
                            className="w-full rounded-2xl"
                        />


                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-300" />
                    </motion.div>


                    <motion.div
                        className="absolute bottom-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl font-bold z-30"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        {index + 1}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}