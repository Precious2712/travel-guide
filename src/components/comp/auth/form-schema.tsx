import * as z from "zod";

export const loginFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});



export const signupFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});


export type LoginFormValues = z.infer<typeof loginFormSchema>;

export type SignupFormValues = z.infer<typeof signupFormSchema>;
