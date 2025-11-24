// src/components/ui/button.tsx
import { cn } from "@/lib/cn";
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";

type Variant = "primary" | "outline" | "ghost" | "destructive";

interface ButtonProps extends TouchableOpacityProps {
    className?: string;
    textClassName?: string;
    children?: React.ReactNode;
    loading?: boolean;
    variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground",
    outline: "border border-black/10 bg-transparent",
    ghost: "bg-transparent",
    destructive: "bg-red-900 text-white",
};

const textStyles: Record<Variant, string> = {
    primary: "text-primary-foreground",
    outline: "text-foreground",
    ghost: "text-foreground",
    destructive: "text-white",
};

export function Button({
    className,
    textClassName,
    children,
    variant = "primary",
    loading = false,
    disabled,
    style,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            {...props}
            disabled={isDisabled}
            activeOpacity={0.7}
            className={cn(
                "px-4 py-3 rounded-xl flex-row items-center justify-center",
                variantStyles[variant],
                isDisabled && "opacity-50",
                className
            )}
            style={style as ViewStyle}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) : typeof children === "string" ? (
                <Text className={cn("text-base font-medium", textStyles[variant], textClassName)}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}