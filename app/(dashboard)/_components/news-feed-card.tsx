import { memo } from "react";
import { Card } from "./card";

export const NewsFeedCard = memo(function SocialMedia() {
    return <>
        <Card label="News Feed" source={require("../../../assets/images/news-feed.png")} colors={["rgba(0, 0, 0, 0.2)", "rgba(255, 179, 0, 0.2)"]} />
    </>
})