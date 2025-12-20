import { memo } from "react";
import { Card } from "./card";

export const MetromonialCard = memo(function SocialMedia() {
    return <>
        <Card label="Metromonial" source={require("../../../assets/images/metromonial.png")} colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 200, 150, 0.2)"]} />
    </>
})
