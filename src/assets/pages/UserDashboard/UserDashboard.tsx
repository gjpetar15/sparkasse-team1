import UserHeader from "../../components/UserHeader/UserHeader";
import UserSidePanel from "../../components/UserSidePanel/UserSidePanel";
import UserStats from "../../components/UserStats/UserStats";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import DashboardInfoCard from "../../components/DashboardInfoCard/DashboardInfoCard";
import { useEffect, useState } from "react";

const UserDashboard = () => {
    const [user, setUser] = useState<any>(null);
    const [loaded, setLoaded] = useState(false);
    const infoCards = [
            {
                title: "Планирај ја твојата патека на учење",
                info: "Определи го времето за учење и почни да ја градиш твојата финансиска иднина со твоe темпо.",
                buttonText: "Избери време",
                color: "#02A3A4",
                graph: null
            },
            {
                title: "Твојата неделна активност",
                info: "Приказ на твојата неделна активност.",
                color: "#03BF89",
                graph: {
                    labels: ["П", "В", "С", "Ч", "П", "С", "Н"],
                    data: [5, 10, 15, 0, 0, 0, 0]
                }
            },
            {
                title: "Штедомер",
                info: "Штедомерот е алатка што пресметува заштеда според приходи и трошоци и нуди совети за постигнување финансиски цели.",
                buttonText: "Избери време",
                color: "#721C7A",
                graph: null
            }
        ];

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch("https://3bf7-31-11-74-166.ngrok-free.app/api/users/3", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "ngrok-skip-browser-warning": "69420",
                        }
                    });
        
                    const responseData = (await response.json()).data;
                    setUser(responseData);
                } catch (error) {
                    setUser("Failed to fetch course details");
                } finally {
                    setLoaded(true);
                }
            };
        
            fetchData();
          }, []);

    return (
        <div className="min-h-dvh w-vw">
            {
                loaded && (
                    <>
                        <div>
                            <UserHeader user={user} />
                        </div>
                        <div className="flex">
                            <UserSidePanel />
                            <div className="w-full me-[120px]">
                                <div className="mb-8">
                                    <WelcomeSection user={user} />
                                </div>
                                <div className="mb-8">
                                    <UserStats user={user} />
                                </div>
                                <div className="flex justify-between mb-8">
                                    {
                                        infoCards.map((card, index) => (
                                            <DashboardInfoCard key={card.info + index} title={card.title} info={card.info} color={card.color} buttonText={card.buttonText} graph={card.graph} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                ) 
            }
        </div>
    );
};

export default UserDashboard;