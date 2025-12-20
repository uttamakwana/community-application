// src/components/ui/input.tsx
import { cn } from "@/lib/cn";
import { IconSymbol } from "./icon-symbol";
import { Text } from "./text";
import { View } from "./view";

type TSelectProps = { label?: string, className?: string }

export function Select({ className = "h-[48px] p-4 rounded bg-input flex flex-row items-center justify-between", label = "Select", ...props }: TSelectProps) {
    return <View className={cn(className)} {...props}>
        <Text className="text-input-foreground">{label}</Text>
        <View className="ml-auto">
            <IconSymbol name="chevron.backward" color={"white"} size={16} style={{ transform: "rotate(-90deg)" }} />
        </View>
    </View>;
}
