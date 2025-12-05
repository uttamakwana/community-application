import { OnboardingView } from "@/components";
import { Button, Input, Text, View } from "@/components/ui";

export default function EnterMobileNumber() {
    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <View className="gap-4">
                <Text className="text-primary-foreground text-[32px]">Sign In</Text>
                <Text className="text-primary-foreground text-[16px]">Enter mobile number to get started</Text>
                <Input placeholder="Enter your mobile number" />
            </View>

            <Button variant="gradient">Submit</Button>
        </View>
    </OnboardingView>
}