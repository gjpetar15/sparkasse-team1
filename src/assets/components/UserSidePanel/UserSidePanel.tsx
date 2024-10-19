import { NavLink } from "react-router-dom";

const UserSidePanel = () => {
  return (
    <div className="bg-[#F1F5F7] h-[calc(100vh-140px)] w-[373px] mt-14 rounded-r-xl pt-10 px-6 relative mr-8">
      <div className="flex flex-col items-center">
        <img
          src="/src/assets/images/UserSideLogo.svg"
          alt="logo"
          className="h-[80px] w-[80px]"
        />
      </div>
      <div className="mt-10">
        <div className="flex flex-col">
            <div>
                <NavLink to="/user-dashboard/main-panel" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <img src="/src/assets/images/UserSidePanelNav/MainPanel.svg" className="text-[15px] me-[14px]"/>
                    <span>Главен панел</span>
                </NavLink>
                <NavLink to="/user-dashboard/my-profile" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <img src="/src/assets/images/UserSidePanelNav/MyProfile.svg" className="text-[15px] me-[14px]" />
                    <span>Мој профил</span>
                </NavLink>
                <NavLink to="/user-dashboard/courses" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <img src="/src/assets/images/UserSidePanelNav/Courses.svg" className="text-[15px] me-[14px]" />
                    <span>Курсеви</span>
                </NavLink>
                <NavLink to="/user-dashboard/piggy-bank" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <img src="/src/assets/images/UserSidePanelNav/PiggyBank.svg" className="text-[15px] me-[14px]" />
                    <span>Штедомедар</span>
                </NavLink>
            </div>
            <div className="absolute bottom-0">
                <NavLink to="/user-dashboard/notifications" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <img src="/src/assets/images/UserSidePanelNav/Feedback.svg" className="text-[15px] me-[14px]" />
                    <span>Фидбек</span>
                </NavLink>
                <button className="text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0]">
                    <img src="/src/assets/images/UserSidePanelNav/Logout.svg" className="text-[15px] me-[14px]" />
                    <span>Одјави се</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidePanel;