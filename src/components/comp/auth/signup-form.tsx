"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";

import { SignupFormValues, signupFormSchema } from "./form-schema";
import { signupFieldComp } from "@/data/auth-field";
import { ShacdnSignup } from "./shacdn-signup";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import { Field, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

// Password requirement component props
interface PasswordRequirementProps {
    met: boolean;
    text: string;
}

const PasswordRequirement = ({ met, text }: PasswordRequirementProps) => (
    <motion.div
        className="flex items-center space-x-2 text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
    >
        <motion.div
            animate={{
                scale: met ? [1, 1.2, 1] : 1,
                backgroundColor: met ? "#10b981" : "#6b7280"
            }}
            transition={{ duration: 0.3 }}
            className={`w-4 h-4 rounded-full flex items-center justify-center`}
        >
            {met && (
                <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
            )}
        </motion.div>
        <span className={met ? "text-white" : "text-white/60"}>{text}</span>
    </motion.div>
);

export function SignupForm() {
    const [password, setPassword] = useState<string>("");
    const [passwordStrength, setPasswordStrength] = useState<number>(0);

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Watch password changes
    const watchPassword = form.watch("password");

    useEffect(() => {
        setPassword(watchPassword || "");

        // Calculate password strength
        let strength = 0;
        if (watchPassword?.length >= 8) strength += 25;
        if (watchPassword?.match(/[A-Z]/)) strength += 25;
        if (watchPassword?.match(/[0-9]/)) strength += 25;
        if (watchPassword?.match(/[^A-Za-z0-9]/)) strength += 25;

        setPasswordStrength(strength);
    }, [watchPassword]);

    const passwordRequirements: PasswordRequirementProps[] = [
        { met: password.length >= 8, text: "At least 8 characters" },
        { met: /[A-Z]/.test(password), text: "One uppercase letter" },
        { met: /[0-9]/.test(password), text: "One number" },
        { met: /[^A-Za-z0-9]/.test(password), text: "One special character" },
    ];

    function onSubmit(data: SignupFormValues) {
        console.log(data);
    }

    // Animation variants with proper typing
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring", 
                stiffness: 100,
            },
        },
    };

    const strengthColor = passwordStrength <= 25 ? "bg-red-500" : passwordStrength <= 50 ? "bg-orange-500" : passwordStrength <= 75 ? "bg-yellow-500" : "bg-green-500";

    return (
        <div className="flex flex-1 min-h-screen bg-gray-900">
            {/* Left Side - Flight-themed with password requirements */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden"
            >
                {/* Animated clouds/patterns */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        backgroundSize: "200% 200%",
                    }}
                />

                {/* Main content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8"
                >


                    {/* Main message */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center max-w-md"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl font-bold mb-6 leading-tight"
                        >
                            Your Journey
                            <motion.span
                                animate={{
                                    textShadow: ["0 0 8px rgba(255,255,255,0.5)", "0 0 16px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.5)"]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-pink-200"
                            >
                                Begins Here
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-blue-100 mb-8 leading-relaxed"
                        >
                            Join millions of travelers who trust us for seamless bookings,
                            exclusive deals, and unforgettable experiences.
                        </motion.p>

                        {/* Password Requirements Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="space-y-4 text-left bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl"
                        >
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-lg font-semibold text-white mb-3"
                            >
                                Password Requirements
                            </motion.h3>

                            {/* Password strength bar */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs text-white/70 mb-1">
                                    <span>Password Strength</span>
                                    <span>
                                        {passwordStrength <= 25 ? "Weak" :
                                            passwordStrength <= 50 ? "Fair" :
                                                passwordStrength <= 75 ? "Good" : "Strong"}
                                    </span>
                                </div>
                                <motion.div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full ${strengthColor}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${passwordStrength}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.div>
                            </div>

                            {/* Password requirements list */}
                            <AnimatePresence>
                                {passwordRequirements.map((req, index) => (
                                    <PasswordRequirement
                                        key={index}
                                        met={req.met}
                                        text={req.text}
                                    />
                                ))}
                            </AnimatePresence>

                            {/* Flight deals teaser */}
                            <motion.div
                                className="mt-4 pt-4 border-t border-white/20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <p className="text-xs text-white/50">
                                    ✈️ Join now and get 20% off your first booking!
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Floating destinations */}
                    <motion.div
                        className="absolute bottom-8 left-8 text-white/30 text-sm font-mono"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        ✈️ NYC • PAR • TKY • LON • DXB ✈️
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Side - Signup Form with animations */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex-1 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-0"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 0.4
                    }}
                    className="w-full max-w-md "
                >
                    <Card className="w-full shadow-2xl border-0 ">

                        <CardContent className="pt-0 ">
                            <form
                                id="signup-form"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <FieldGroup>
                                    {signupFieldComp.map((field, index) => (
                                        <motion.div
                                            key={field.name}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                        >
                                            <ShacdnSignup
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                type={field.type}
                                                required={field.required}
                                                control={form.control}
                                            />
                                        </motion.div>
                                    ))}
                                </FieldGroup>
                            </form>
                        </CardContent>

                        <CardFooter>
                            <Field orientation="horizontal" className="justify-between w-full">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => form.reset()}
                                        className="hover:bg-gray-100"
                                    >
                                        Reset
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type="submit"
                                        form="signup-form"
                                        className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                                    >
                                        <motion.span
                                            animate={{
                                                x: [0, 4, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "easeInOut"
                                            }}
                                            className="inline-block mr-2"
                                        >
                                            ✈️
                                        </motion.span>
                                        Sign Up & Fly
                                    </Button>
                                </motion.div>
                            </Field>
                        </CardFooter>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
}