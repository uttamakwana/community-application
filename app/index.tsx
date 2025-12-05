import { BackgroundWithLogo } from "@/components";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const isFirstTime = true;

            if (isFirstTime) {
                router.replace("/(onboarding)");
            } else {
                router.replace("/(dashboard)");
            }
        }, 1500);

        return () => clearTimeout(timeout);
    }, [router]);

    return <BackgroundWithLogo />;
}
