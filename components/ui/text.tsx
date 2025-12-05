// src/components/ui/text.tsx
import { cn } from "@/lib/cn";
import { Text as RNText, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  className?: string;
}

export function Text({ className = "font-euclid", style, ...props }: CustomTextProps) {
  return <RNText {...props} style={style} className={cn(className)} />;
}
