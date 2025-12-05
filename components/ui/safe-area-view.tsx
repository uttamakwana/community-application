// src/components/ui/view.tsx
import { cn } from "@/lib/cn";
import { SafeAreaView as RNSafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface CustomSafeAreaViewProps extends SafeAreaViewProps {
    className?: string;
}

export function SafeAreaView({ className, style, ...props }: CustomSafeAreaViewProps) {
    return <RNSafeAreaView {...props} style={style} className={cn(className)} />;
}
