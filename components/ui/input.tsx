// src/components/ui/input.tsx
import { cn } from "@/lib/cn";
import { TextInput, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
    className?: string;
}

export function Input({ className = "h-[48px] p-4 rounded bg-input placeholder:text-placeholder text-input-foreground", style, ...props }: CustomInputProps) {
    return <TextInput {...props} style={style} className={cn(className)} />;
}
