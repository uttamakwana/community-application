import { memo, PropsWithChildren } from "react";
import { SafeAreaView, View } from "./ui";

type TOnboardingViewProps = PropsWithChildren;
export const OnboardingView = memo(function OnboardingView({ children }: TOnboardingViewProps) {
    return <SafeAreaView className="flex-1 bg-primary">
        <View className="pt-[48px] pb-[32px] px-[16.5px] flex-1">{children}</View>
    </SafeAreaView>
})