import { memo } from "react";
import { Card } from "./card";

export const MessagingAndCallCard = memo(function SocialMedia() {
    return <>
        <Card label="Messing & Call" source={require("../../../assets/images/messaging-and-call.png")} colors={["rgba(0, 0, 0, 0.2)", "rgba(30, 136, 229, 0.2)"]} />
    </>
})