import { OnboardingView, OnboardingViewContent } from "@/components";
import { Button, DocumentPicker, ErrorMessage, Select, View } from "@/components/ui";
import { navigate } from "expo-router/build/global-state/routing";

export default function EducationProof() {
    // const [isError, setIsError] = useState(false);

    return <OnboardingView>
        <View className="gap-4 justify-between flex-1">
            <OnboardingViewContent title="Education Proof">
                <View className="gap-4">
                    <Select label="Select Document" />
                    <DocumentPicker label="Upload Front Side" />
                    <DocumentPicker label="Upload Back Side" />
                    <ErrorMessage label="Rejected" message="Lorem Ipsum is simply dummy text of the printing and
typesetting industry." />
                </View>
            </OnboardingViewContent>
            <Button variant="gradient" onPress={() => {
                navigate("/upload-document")
            }}>Next</Button>
        </View>
    </OnboardingView>
}