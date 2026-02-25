'use client';

import { motion } from "framer-motion";
import { flightSteps } from "@/data/field";

type Step = {
    title: string;
    description: string;
    image: string;
    card: string;
    bg: string;
};

export function FlightScrollMobile() {
    return (
        <section className="px-4 space-y-[15vh] py-4">
            {flightSteps.map((step, i) => (
                <MobileStep key={step.title} step={step} index={i} />
            ))}
        </section>
    );
}

function MobileStep({ step, index }: { step: Step; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="sticky top-8 h-[80vh] rounded-3xl overflow-hidden shadow-xl"
            style={{
                backgroundColor: step.bg,
                zIndex: index,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-15% 0px -15% 0px", once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Progress indicator */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-white/30 z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
            />

            
            <div className="h-full flex flex-col relative z-20">
                
                <div className="p-6 pb-3">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm font-bold">
                            {index + 1}
                        </div>
                        <div className="h-0.5 flex-1 bg-white/20 rounded-full" />
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-gray-600 drop-shadow-md">
                        {step.title}
                    </h2>

                    <p className="text-sm text-blue-400 leading-relaxed line-clamp-3 drop-shadow">
                        {step.description}
                    </p>
                </div>

                
                <div className="relative flex-1 px-4 pb-4">
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-inner">
                        
                        <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                        />

                       
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                        
                        <motion.div
                            className="absolute left-4 right-4"
                            style={{
                                bottom: isEven ? '1rem' : 'auto',
                                top: isEven ? 'auto' : '1rem',
                            }}
                            initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <img
                                    src={step.card}
                                    alt=""
                                    className="w-full rounded-xl shadow-2xl"
                                />
                                
                                <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
        </motion.div>
    );
}