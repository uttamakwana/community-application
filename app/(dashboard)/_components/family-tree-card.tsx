import { memo } from "react";
import { Card } from "./card";

export const FamilyTreeCard = memo(function SocialMedia() {
    return <>
        <Card label="Family Tre" source={require("../../../assets/images/family-tree.png")} colors={["rgba(0, 0, 0, 0.2)", "rgba(106, 90, 205, 0.2)"]} />
    </>
})