// src/components/ui/button.tsx
import { cn } from "@/lib/cn";
import { LinearGradient } from "expo-linear-gradient";
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";

type Variant = "primary" | "outline" | "ghost" | "destructive" | "gradient";

interface ButtonProps extends TouchableOpacityProps {
    className?: string;
    textClassName?: string;
    children?: React.ReactNode;
    loading?: boolean;
    variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
    primary: "bg-primary",
    outline: "border border-black/10 bg-transparent",
    ghost: "bg-transparent",
    destructive: "bg-red-900",
    gradient: "", // gradient has no tailwind bg
};

const textStyles: Record<Variant, string> = {
    primary: "text-primary-foreground",
    outline: "text-foreground",
    ghost: "text-foreground",
    destructive: "text-white",
    gradient: "text-white",
};

// Define gradient color presets
// const gradientPresets = {
//     primary: ["red", "yellow"], // Blue to Purple
//     secondary: ["hsl(142 76% 36% / 1)", "hsl(163 94% 24% / 1)"], // Green to Dark Green
//     // Add more presets as needed
// };

// // You could also make this configurable via props
// interface GradientButtonProps extends ButtonProps {
//     gradientColors?: [string, string]; // Tuple of two colors
//     gradientDirection?: { start: { x: number; y: number }; end: { x: number; y: number } };
// }

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

    const content = (
        <>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : typeof children === "string" ? (
                <Text
                    className={cn("text-base font-medium", textStyles[variant], textClassName, disabled ? "text-disabled-button" : "")}
                >
                    {children}
                </Text>
            ) : (
                children
            )}
        </>
    );

    // If variant is gradient → wrap inside <LinearGradient>
    if (variant === "gradient") {
        return (
            <TouchableOpacity
                {...props}
                disabled={isDisabled}
                activeOpacity={0.7}
                className={cn(
                    "h-[48px] rounded-xl overflow-hidden", // required for gradient rounded corners
                    isDisabled && "opacity-50",
                    className
                )}
                style={style as ViewStyle}
            >
                <LinearGradient
                    colors={
                        isDisabled
                            ? ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"]
                            : [
                                "rgb(0, 119, 255)", // Your accent color
                                "rgb(133, 84, 237)",  // Your secondary color
                            ]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    {content}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            {...props}
            disabled={isDisabled}
            activeOpacity={0.7}
            className={cn(
                "h-[48px] px-4 py-3 rounded-xl flex-row items-center justify-center",
                isDisabled ? "bg-disabled-button opacity-50" : variantStyles[variant],
                className
            )}
            style={style as ViewStyle}
        >
            {content}
        </TouchableOpacity>
    );
}