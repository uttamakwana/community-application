import { memo } from "react";
import { IconSymbol } from "./icon-symbol";
import { Text } from "./text";
import { View } from "./view";

type TDocumentPickerProps = {
    label?: string;
}
export const DocumentPicker = memo(function DocumentPicker({ label = "Upload Image"}: TDocumentPickerProps) {
    return <View className="gap-2">
        <Text className="text-foreground text-sm">{label}</Text>
        <View className="h-[150px] flex items-center justify-center gap-2 bg-card border border-dashed border-white/20 rounded-sm">
            <IconSymbol name="doc.text.image" color={"rgb(71, 193, 109)"} size={32} />
            <Text className="text-sm text-foreground">Upload Document</Text>
        </View>
    </View>
})