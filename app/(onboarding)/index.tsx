import { OnboardingView, OnboardingViewContent } from "@/components";
import { Button, Input, View } from "@/components/ui";
import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";

export default function EnterMobileNumber() {
    const [contactNumber, setContactNumber] = useState("");
    const hasValidContactNumber = contactNumber.length === 10;

    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <OnboardingViewContent canBack={false} title="Sign In" subTitle="Enter contact number to get started">
                <Input
                    placeholder="Enter mobile number"
                    keyboardType="phone-pad"
                    maxLength={10}

                    // Validation & formatting
                    autoComplete="tel"
                    textContentType="telephoneNumber"

                    onChangeText={(text) => {
                        // Remove non-numeric characters
                        const cleaned = text.replace(/[^0-9]/g, '');
                        setContactNumber(cleaned);
                    }} />
            </OnboardingViewContent>

            <Button variant="gradient" disabled={!hasValidContactNumber} onPress={() => {
                navigate("/(onboarding)/enter-otp")
            }}>Submit</Button>
        </View>
    </OnboardingView>
}