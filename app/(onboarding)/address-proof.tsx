import { OnboardingView, OnboardingViewContent } from "@/components";
import { Button, DocumentPicker, Select, View } from "@/components/ui";
import { navigate } from "expo-router/build/global-state/routing";

export default function AddressProof() {
    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <OnboardingViewContent title="Address Proof">
                <View className="gap-4">
                    <Select label="Select Document" />
                    <DocumentPicker label="Upload Front Side" />
                    <DocumentPicker label="Upload Back Side" />
                </View>
            </OnboardingViewContent>
            <Button variant="gradient" onPress={() => {
                navigate("/education-proof")
            }}>Next</Button>
        </View>
    </OnboardingView>
}