import { useEffect, useState } from "react";
import UserStatsCard from "../UserStatsCard/UserStatsCard";

const UserStats = () => {

    const [userStats, setUserStats] = useState<any>([]);
    const [userBadge, setUserBadge] = useState<any>({
        badge_url: "/src/assets/images/BadgePioneer.svg"
    });
    
    useEffect(() => {
        setUserStats([
            {
                card_title: "Курсеви во тек.",
                value: Math.floor(Math.random() * 10),
                show_extra_text: false,
                color: "#721C7A"
            },
            {
                card_title: "Завршени курсеви.",
                value: Math.floor(Math.random() * 10),
                show_extra_text: false,
                color: "#028661"
            },
            {
                card_title: "Поминато време на учење.",
                value: Math.floor(Math.random() * 10),
                show_extra_text: true,
                color: "#EB4C79"
            },
            {
                card_title: "Освоено беџови.",
                value: 1,
                show_extra_text: false,
                color: "#0CB43F"
            },
            {
                card_title: "Потребни курсеви за следен беџ.",
                value: 4,
                show_extra_text: false,
                color: "#02A3A4"
            }
        ]);

        // TODO: Implement fetchUserStats function
        // const fetchUser = async () => {
        // const user = await getUser();
        // setUser(user);
        // };
    
        // fetchUser();
    }, []);

    
    return (
        <div className="flex justify-between">
            <UserStatsCard key={userBadge.badge_url} badge={userBadge.badge_url} />                
            {
                userStats.map((stat: any, index: number) => {
                    return (
                        <UserStatsCard key={stat.card_title + index} stat={stat.value} title={stat.card_title} color={stat.color} showExtraText={stat.show_extra_text}/>
                    );
                })
            }
        </div>
    );
};

export default UserStats;
