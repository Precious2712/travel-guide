"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sections } from "@/data/category";
import Image from "next/image";

export function StickySection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        if (!isNaN(index)) setActiveIndex(index);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
                
                <div>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            ref={(el) => { sectionRefs.current[index] = el; }}
                            data-index={index}
                            className="h-screen flex items-center justify-center px-8"
                        >
                            <div className="text-left max-w-md">
                                
                                <span className="text-sm font-medium text-blue-400 mb-4 block">
                                    STEP {index + 1} • {section.category}
                                </span>

                                
                                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                                    {section.title}
                                </h1>

                                
                                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                                    {section.text}
                                </p>

                                
                                <ul className="space-y-4">
                                    {section.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-blue-400 text-xl mt-1">•</span>
                                            <span className="text-white/70 text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative ">
                    <div className="sticky top-30 h-screen flex items-center justify-center">
                        <div className="relative w-150 h-150">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={sections[activeIndex].image}
                                        alt={sections[activeIndex].title}
                                        fill
                                        className="object-contain rounded-xl "
                                        priority={activeIndex === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}