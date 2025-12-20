import { cn } from "@/lib";
import { memo, PropsWithChildren } from "react";
import { Image, View } from "./ui";

type TBackgroundProps = { className?: string } & PropsWithChildren;
export const Background = memo(function Background({ children }: TBackgroundProps) {
    return <View className="relative bg-primary flex-1 items-center justify-center">
        {children}
    </View>
})


export const BackgroundWithLogo = memo(function BackgroundWithLogo({ children, className }: TBackgroundProps) {
    const mergedClassName = cn("relative bg-primary flex-1 items-center justify-center", className)

    return <View className={mergedClassName}>
        <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 113.29, height: 120 }}
        />
        {children}
    </View>
})