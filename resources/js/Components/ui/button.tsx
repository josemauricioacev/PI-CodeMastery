import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "destructive" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "default",
            size = "default",
            children,
            ...props
        },
        ref
    ) => {
        const getVariantClasses = () => {
            switch (variant) {
                case "outline":
                    return "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";
                case "destructive":
                    return "bg-red-500 text-white hover:bg-red-600";
                case "ghost":
                    return "bg-transparent text-gray-800 hover:bg-gray-100";
                case "link":
                    return "bg-transparent text-purple-600 underline-offset-4 hover:underline";
                default:
                    return "bg-purple-600 text-white hover:bg-purple-700";
            }
        };

        const getSizeClasses = () => {
            switch (size) {
                case "sm":
                    return "h-8 px-3 text-xs";
                case "lg":
                    return "h-12 px-6 text-base";
                case "icon":
                    return "h-9 w-9 p-0";
                default:
                    return "h-10 px-4 py-2 text-sm";
            }
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    getVariantClasses(),
                    getSizeClasses(),
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
