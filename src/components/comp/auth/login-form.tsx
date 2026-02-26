
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginFormSchema } from "./form-schema";
import { ShacdnSignup } from "./shacdn-signup";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function LoginForm() {
    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        console.log("Login data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">

                <div className="hidden md:flex md:w-1/2 justify-center">
                    <Image
                        src="/flight-search.png"
                        alt="Login illustration"
                        width={500}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <Card className="w-full border-0 shadow-2xl bg-transparent backdrop-blur-sm">
                        <CardHeader className="space-y-1 ">
                            <CardTitle className="text-3xl font-bold text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Welcome Back
                            </CardTitle>

                            <CardDescription className="text-center text-gray-600">
                                Enter your credentials to access your account
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                <ShacdnSignup
                                    name="email"
                                    control={control}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                />

                                <div className="space-y-2">
                                    <ShacdnSignup
                                        name="password"
                                        control={control}
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                    />

                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                        >
                                            Change password?
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-semibold bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
                                    disabled={!isValid || isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Signing in...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            Sign In
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </Button>
                            </form>

                           


                        </CardContent>

                        <CardFooter className="flex justify-center pb-8">
                            <Link href="/signup" className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <span className="text-blue-600 hover:underline font-semibold">
                                    Sign up
                                </span>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </div>
    );
}