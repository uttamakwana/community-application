import { memo, PropsWithChildren } from "react";
import { IconSymbol, SafeAreaView, Text, View } from "./ui";

type TOnboardingViewProps = PropsWithChildren;
export const OnboardingView = memo(function OnboardingView({ children }: TOnboardingViewProps) {
    return <SafeAreaView className="flex-1 bg-primary relative">
        {/* <View
            className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full"
            style={{
                backgroundColor: "rgba(132, 83, 237, 0.6)",
            }}
        /> */}

        <View className="pt-[48px] pb-[16px] px-[16.5px] flex-1">{children}</View>
    </SafeAreaView>
})

type TOnboardingViewWithHeadingsProps = { title: string, subTitle?: string, canBack?: boolean; } & PropsWithChildren;
export const OnboardingViewContent = memo(function OnboardingViewWithHeadings({ children, title, subTitle, canBack = true }: TOnboardingViewWithHeadingsProps) {
    return <View className="gap-4">
        {canBack && <View className="h-[40px] w-[40px] rounded-full bg-input items-center justify-center">
            <IconSymbol size={16} color={"white"} name="arrow.left" />
        </View>}
        <Text className="text-primary-foreground text-[32px]">{title}</Text>
        {subTitle && <Text className="text-primary-foreground text-[16px]">{subTitle}</Text>}
        {children}
    </View>
})