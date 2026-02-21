import { SignupFormValues } from "@/components/comp/auth/form-schema";
import { FieldPath } from "react-hook-form";

export interface SignupField {
    name: FieldPath<SignupFormValues>;
    placeholder: string;
    type: string;
    required: boolean;
}


export const signupFieldComp: SignupField[] = [
    {
        name: "email",
        placeholder: "Enter a valid email",
        type: "email",
        required: true,
    },
    {
        name: "password",
        placeholder: "Enter your password",
        type: "password",
        required: true,
    },
];


export const loginFieldComp: SignupField[] = [
    {
        name: "email",
        placeholder: "Enter a valid email",
        type: "email",
        required: true,
    },
    {
        name: "password",
        placeholder: "Enter your password",
        type: "password",
        required: true,
    },
];
