import { Image, Text, View } from "@/components/ui";
import { FamilyTreeCard, MessagingAndCallCard, MetromonialCard, NewsFeedCard, SocialMediaCard } from "./_components";

export default function DashboardScreen() {
    return <View className="pt-[48px] pb-[16px] px-[16.5px] flex-1 bg-primary">
        <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
                <Image
                    source={require("../../assets/images/profile-logo.png")}
                    style={{ width: 48, height: 48 }}
                />
                <View>
                    <Text className="text-primary-foreground">Good Morning...!!!</Text>
                    <Text className="text-primary-foreground font-bold">Ashokbhai Ahir</Text>
                </View>
            </View>

            <View className="bg-card aspect-square p-2 rounded-full">
                <Image
                    source={require("../../assets/images/candle-switch.png")}
                    style={{ width: 16, height: 16 }}
                />
            </View>
        </View>

        <View className="gap-4 mt-4">
            <View className="flex-row gap-4">
                <SocialMediaCard />
                <MessagingAndCallCard />
            </View>
            <View className="h-[200px]">
                <FamilyTreeCard />
            </View>
            <View className="flex-row gap-4">
                <MetromonialCard />
                <NewsFeedCard />
            </View>
        </View>
    </View>
}