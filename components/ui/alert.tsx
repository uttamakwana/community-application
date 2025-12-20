import { cn } from "@/lib";
import { memo } from "react";
import { IconSymbol } from "./icon-symbol";
import { Text } from "./text";
import { View } from "./view";

type TAlertType = "success" | "error";
type TAlertProps = {
    label: string;
    type?: TAlertType;
    message?: string;
    className?: string;
}

const variantClassNames: Record<TAlertType, string> = {
    success: "border-success",
    error: "border-danger",
}

const variantIcons: Record<TAlertType, any> = {
    success: <IconSymbol name="checkmark" color={"rgb(71, 193, 109)"} size={24} />,
    error: <IconSymbol name="exclamationmark.circle" color={"rgb(235, 56, 86)"} size={24} />
}

export const Alert = memo(function Alert({ label, type = "success", message, className = "min-h-[48px] bg-card p-4 rounded-md gap-4 border w-full" }: TAlertProps) {

    const mergedClassName = cn(className, variantClassNames[type])


    return <View className={mergedClassName}>
        <View className="flex flex-row items-center justify-between">
            <Text className="text-sm font-bold text-card-foreground">{label}</Text>
            {variantIcons[type]}
        </View>
        {message && <Text className="text-xs text-card-foreground">{message}</Text>}
    </View>
})