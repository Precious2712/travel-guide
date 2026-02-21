"use client";

import {
    Controller,
    Control,
    FieldPath,
    ControllerRenderProps,
} from "react-hook-form";

import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { SignupFormValues } from "./form-schema";

interface UserSignupProps {
    name: FieldPath<SignupFormValues>;
    placeholder: string;
    type: string;
    required?: boolean;
    control: Control<SignupFormValues>;
}

export function ShacdnSignup({
    name,
    placeholder,
    type,
    required,
    control,
}: UserSignupProps) {

    const renderInput = (
        field: ControllerRenderProps<SignupFormValues, typeof name>,
        invalid: boolean
    ) => {
        switch (name) {
            case "email":
                return (
                    <Input
                        {...field}
                        type="email"
                        placeholder={placeholder}
                        required={required}
                        aria-invalid={invalid}
                        autoComplete="email"
                    />
                );

            case "password":
                return (
                    <Input
                        {...field}
                        type="password"
                        placeholder={placeholder}
                        required={required}
                        aria-invalid={invalid}
                        autoComplete="new-password"
                        className="focus ring-2"
                    />
                );

            default:
                return (
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        aria-invalid={invalid}
                    />
                );
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="capitalize">{name}</FieldLabel>

                    {renderInput(field, fieldState.invalid)}

                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    );
}
