import { memo } from "react";
import { Card } from "./card";

export const SocialMediaCard = memo(function SocialMedia() {
    return <>
        <Card label="Social Media" source={require("../../../assets/images/social-media.png")} colors={["rgba(0, 0, 0, 0.2)", "rgba(233, 30, 99, 0.2)"]} />
    </>
})