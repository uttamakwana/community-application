import { Image, Text, View } from "@/components/ui";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { memo } from "react";
import { ImageProps } from "react-native";

type TCardProps = {
    label: string;
    colors: LinearGradientProps["colors"];
    source: ImageProps["source"];
}
export const Card = memo(function Card({ label, colors, source }: TCardProps) {
    return <View className="flex-1 h-[200px] rounded-lg border border-white/10">
        <LinearGradient
            className="gap-4"
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Image
                source={source}
                style={{ width: 64, height: 64 }}
            />
            <Text className="text-card-foreground font-bold">{label}</Text>
        </LinearGradient>
    </View >
})