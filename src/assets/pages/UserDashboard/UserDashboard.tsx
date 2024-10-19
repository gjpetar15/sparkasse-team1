import UserHeader from "../../components/UserHeader/UserHeader";
import UserSidePanel from "../../components/UserSidePanel/UserSidePanel";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection";

const UserDashboard = () => {
  return (
    <div className="min-h-dvh w-vw">
        <div>
            <UserHeader />
        </div>
        <div className="flex">
            <UserSidePanel />
            <div className="w-full me-[120px]">
                <WelcomeSection />
            </div>
        </div>
    </div>
  );
};

export default UserDashboard;