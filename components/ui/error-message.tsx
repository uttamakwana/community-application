import { memo } from "react";
import { Text } from "./text";
import { View } from "./view";

type TErrorMessageProps = { label?: string; message: string };
export const ErrorMessage = memo(function ErrorMessage({ label = "", message }: TErrorMessageProps) {
    return <View className="bg-card border border-danger p-4 rounded-sm gap-2">
        {label && <Text className="text-danger text-sm font-bold">{label}</Text>}
        <Text className="text-card-foreground text-xs">{message}</Text>
    </View>
})