import UserHeader from "../../components/UserHeader/UserHeader";
import UserSidePanel from "../../components/UserSidePanel/UserSidePanel";
import UserStats from "../../components/UserStats/UserStats";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";
import DashboardInfoCard from "../../components/DashboardInfoCard/DashboardInfoCard";

const UserDashboard = () => {
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


  return (
    <div className="min-h-dvh w-vw">
        <div>
            <UserHeader />
        </div>
        <div className="flex">
            <UserSidePanel />
            <div className="w-full me-[120px]">
                <div className="mb-8">
                    <WelcomeSection />
                </div>
                <div className="mb-8">
                    <UserStats />
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
    </div>
  );
};

export default UserDashboard;