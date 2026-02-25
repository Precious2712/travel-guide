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
                {/* LEFT: Text sections */}
                <div>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            ref={(el) => { sectionRefs.current[index] = el; }}
                            data-index={index}
                            className="h-screen flex items-center justify-center "
                        >
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-white/90">
                                    {section.title}
                                </h1>
                                <p className="mt-4 text-white/70">{section.text}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* RIGHT: Sticky Image */}
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