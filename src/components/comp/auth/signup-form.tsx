import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Plane, Globe, MapPin, Shield, Eye, EyeOff, User, Mail, Lock, Cloud, Star, Compass, Wind } from "lucide-react";

import { SignupFormValues, signupFormSchema } from "./form-schema";
import { PasswordRequirements } from "./password-requirement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120 } },
};

const destinations = ["Tokyo", "Paris", "New York", "Bali", "London", "Dubai"];

export function SignupForm() {
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: { email: "", password: "" },
    });

    const watchPassword = form.watch("password");
    const errors = form.formState.errors;

    useEffect(() => {
        const p = watchPassword || "";
        let s = 0;
        if (p.length >= 8) s += 25;
        if (/[A-Z]/.test(p)) s += 25;
        if (/[0-9]/.test(p)) s += 25;
        if (/[^A-Za-z0-9]/.test(p)) s += 25;
        setPasswordStrength(s);
    }, [watchPassword]);

    function onSubmit(data: SignupFormValues) {
        console.log("Signup:", data);
    }

    return (
        <div className="bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 flex min-h-screen">

            <div className="bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600 relative hidden w-1/2 overflow-hidden gradient-sky-deep lg:flex lg:flex-col lg:justify-center lg:px-16">

                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-linear-to-br from-white/10 to-transparent blur-3xl" />
                    <div className="absolute bottom-40 right-20 h-96 w-96 rounded-full bg-linear-to-tl from-white/5 to-transparent blur-3xl" />
                    <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                    <motion.div
                        className="absolute left-10 top-40"
                        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Cloud className="h-16 w-16 text-white/20" />
                    </motion.div>

                    <motion.div
                        className="absolute right-32 bottom-32"
                        animate={{ x: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Cloud className="h-20 w-20 text-white/15" />
                    </motion.div>

                    <motion.div
                        className="absolute right-16 top-24 z-20"
                        animate={{
                            x: [0, 30, 15, 0],
                            y: [0, -15, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.6, 1]
                        }}
                    >
                        <div className="relative">
                            <Plane className="h-10 w-10 rotate-[-30deg] text-white/40" />
                            <div className="absolute -right-2 top-1/2 h-1 w-12 bg-linear-to-l from-white/30 to-transparent blur-sm" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute left-32 top-48 z-10"
                        animate={{
                            x: [0, -40, -20, 0],
                            y: [0, 20, 10, 0],
                            rotate: [0, -8, 8, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <div className="relative">
                            <Plane className="h-8 w-8 rotate-20 text-white/30" />
                            <div className="absolute -left-2 top-1/2 h-0.5 w-8 bg-linear-to-r from-white/20 to-transparent blur-sm" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-32 left-1/3 z-0"
                        animate={{
                            x: [0, 60, 30, 0],
                            y: [0, -30, -15, 0],
                            rotate: [0, 15, -10, 0]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <Plane className="h-6 w-6 rotate-45 text-white/20" />
                    </motion.div>

                    <motion.div
                        className="absolute right-40 top-1/3 z-0"
                        animate={{
                            x: [0, -50, -25, 0],
                            y: [0, 25, 12, 0],
                            rotate: [0, -12, 12, 0]
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    >
                        <Plane className="h-5 w-5 rotate-[-15deg] text-white/15" />
                    </motion.div>

                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            <Star className="h-3 w-3 text-white/20" />
                        </motion.div>
                    ))}

                    <motion.div
                        className="absolute right-24 top-28"
                        animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                        <Wind className="h-6 w-6 text-white/20" />
                    </motion.div>

                    <motion.div
                        className="absolute left-40 top-52"
                        animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    >
                        <Wind className="h-5 w-5 text-white/15" />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-30 max-w-lg"
                >
                    <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <Plane className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Air Swift
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mb-4 text-6xl font-bold leading-tight text-primary-foreground drop-shadow-lg"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your Next
                        <br />
                        Adventure
                        <br />
                        <span className="text-2xl text-white/70">Awaits</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mb-10 text-lg leading-relaxed text-white/80 drop-shadow">
                        Book flights to 500+ destinations worldwide. Smart pricing, real-time tracking, and a seamless experience from takeoff to landing.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mb-10 grid grid-cols-3 gap-6">
                        {[
                            { icon: Globe, label: "Destinations", value: "500+" },
                            { icon: MapPin, label: "Airlines", value: "120+" },
                            { icon: Shield, label: "Secure", value: "100%" },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <stat.icon className="mx-auto mb-2 h-5 w-5 text-white/70" />
                                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                                <div className="text-xs text-white/60">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                        {destinations.map((dest, index) => (
                            <motion.span
                                key={dest}
                                className="rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm border border-white/20"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(255,255,255,0.25)",
                                    borderColor: "rgba(255,255,255,0.4)"
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.1 }}
                            >
                                <Compass className="inline-block h-3 w-3 mr-1" />
                                {dest}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-sky-600/50 to-transparent pointer-events-none" />
            </div>

            <div className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2 lg:px-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-md"
                >
                    <motion.div variants={itemVariants} className="mb-8 flex items-center gap-2 lg:hidden">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-sky">
                            <Plane className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SkyRoute</span>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2
                            className="mb-1 text-3xl font-bold text-foreground"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Create Account
                        </h2>
                        <p className="mb-8 text-muted-foreground">
                            Start exploring the world with SkyRoute
                        </p>
                    </motion.div>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                Email
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="pl-10"
                                    {...form.register("email")}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-xs text-destructive">{errors.email.message}</p>
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    className="pl-10 pr-10"
                                    {...form.register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-xs text-destructive">{errors.password.message}</p>
                            )}

                            {watchPassword && (
                                <PasswordRequirements
                                    password={watchPassword || ""}
                                    strength={passwordStrength}
                                />
                            )}
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-2">
                            <Button type="submit" className="w-full gradient-sky text-primary-foreground hover:opacity-90 transition-opacity h-12 text-base font-semibold">
                                <Plane className="mr-2 h-4 w-4" />
                                Create Account
                            </Button>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground cursor-pointer">
                            Already have an account?{" "}
                            <Link href='/login' className="font-medium text-primary hover:underline">
                                Sign in
                            </Link>
                        </motion.p>
                    </form>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 rounded-xl border border-border bg-muted/50 p-4 text-center"
                    >
                        <p className="text-sm text-muted-foreground">
                            ✈️ Sign up today and get <span className="font-semibold text-accent">20% off</span> your first flight!
                        </p>
                    </motion.div>
                </motion.div>

                <Link href="/" className="text-white text-sm text-center underline decoration-green-700 hover:decoration-pink-400 transition underline-offset-4 mt-2">
                    Home
                </Link>
            </div>
        </div>
    );
}