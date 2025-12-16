import { OnboardingView, OnboardingViewContent } from "@/components";
import { Button, Input, View } from "@/components/ui";

export default function PersonalInfo() {
    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <OnboardingViewContent title="Personal Info">
                <View className="gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Mobile Number" />
                    <Input placeholder="Email" />
                </View>
            </OnboardingViewContent>
            <Button variant="gradient">Next</Button>
        </View>
    </OnboardingView>
}