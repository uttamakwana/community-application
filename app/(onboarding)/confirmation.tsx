import { BackgroundWithLogo } from "@/components";
import { Alert, Button, Text, View } from "@/components/ui";
import { navigate } from "expo-router/build/global-state/routing";
import { useState } from "react";

export default function Confirmation() {
    // const [isSuccess, setIsSuccess] = useState(false);
    const [status, setStatus] = useState("idle");

    return <View className="pt-[48px] pb-[16px] px-[16.5px] flex-1 bg-primary">
        <BackgroundWithLogo className="">

            {status === "idle" && <>
                <Text className="text-primary-foreground text-center text-3xl font-bold mt-10">Your Document is </Text>
                <Text onPress={() => {
                    setStatus("error");
                }} className="text-primary-foreground text-center text-3xl font-bold">Under Review</Text>
                <Text onPress={() => {
                    setStatus("success");
                }} className="mt-2 text-primary-foreground text-center text-sm">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.</Text></>
            }

            {status === "success" && <>
                <Text onPress={() => {
                    setStatus("idle");
                }} className="text-primary-foreground text-center text-3xl font-bold mt-10">Congratulation...!!!</Text>
                <Text onPress={() => {
                    setStatus("success");
                }} className="mt-2 text-primary-foreground text-center text-sm">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.</Text>
            </>}

            {status === "error" && <>
                <Text onPress={() => {
                    setStatus("idle");
                }} className="text-primary-foreground text-center text-3xl font-bold mt-10">Opps...!!!</Text>
                <Text onPress={() => {
                    setStatus("success");
                }} className="mt-2 text-primary-foreground text-center text-sm">Sorry you can not use this app.</Text>

                <View className="gap-4 w-full mt-10">
                    <Alert label="Leaving Certificate" />
                    <Alert label="Driving License" />
                    <Alert label="Education Certificate" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="error" />
                </View>
            </>}

        </BackgroundWithLogo>
        {status === "success" && <Button variant="gradient" onPress={() => {
            navigate("/(dashboard)")
        }}>Start Now</Button>}
        {status === "error" && <Button variant="gradient" onPress={() => {
            setStatus("idle")
        }}>Retry</Button>}
    </View>
}