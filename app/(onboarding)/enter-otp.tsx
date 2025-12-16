import { OnboardingView, OnboardingViewContent, OTPInput } from "@/components";
import { Button, View } from "@/components/ui";
import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";

export default function EnterOTP() {
    const [otp, setOtp] = useState("");
    const isValid = otp.length === 4;

    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <OnboardingViewContent title="OTP Verification" subTitle="Kindly enter 4 digit pin">
                <OTPInput onChange={(otp) => setOtp(otp)} />
            </OnboardingViewContent>
            <Button variant="gradient" disabled={!isValid} onPress={() => {
                navigate("/(onboarding)/personal-info")
            }}>Verify</Button>
        </View>
    </OnboardingView>
}