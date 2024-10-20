import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router-dom";

const UserSidePanel = () => {

  const navigate = useNavigate();

  const logout = () => {
    navigate(`/signin`);
  };

  return (
    <div className="bg-[#F1F5F7] h-[calc(100vh-140px)] w-[373px] mt-14 rounded-r-xl pt-10 px-6 sticky top-12 mr-8">
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
                {({ isActive }) => (
                    <>
                    <DashboardOutlinedIcon 
                        fontSize="medium" 
                        className={`me-[14px]`} 
                        sx={{ color: isActive ? '#2870ED' : '#A2B6C9' }}
                    />
                        <span>Главен панел</span>
                    </>
                )}
                </NavLink>
                <NavLink to="/user-dashboard/my-profile" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                {({ isActive }) => (
                    <>
                    <PersonOutlineOutlinedIcon 
                        fontSize="medium" 
                        className={`me-[14px]`} 
                        sx={{ color: isActive ? '#2870ED' : '#A2B6C9' }}
                    />
                        <span>Мој профил</span>
                    </>
                )}
                </NavLink>
                <NavLink to="/user-dashboard/courses" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                {({ isActive }) => (
                    <>
                    <FormatListBulletedOutlinedIcon 
                        fontSize="medium" 
                        className={`me-[14px]`} 
                        sx={{ color: isActive ? '#2870ED' : '#A2B6C9' }}
                    />
                        <span>Курсеви</span>
                    </>
                )}
                </NavLink>
                <NavLink to="/user-dashboard/piggy-bank" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                {({ isActive }) => (
                    <>
                    <SavingsOutlinedIcon 
                        fontSize="medium" 
                        className={`me-[14px]`} 
                        sx={{ color: isActive ? '#2870ED' : '#A2B6C9' }}
                    />
                        <span>Штедомер</span>
                    </>
                )}
                </NavLink>
            </div>
            <div className="absolute bottom-0">
                <NavLink to="/user-dashboard/notifications" className={({ isActive }) =>
                `text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0] ${
                    isActive && "bg-[#E4EAF0]"
                }`
                }>
                    <FeedbackOutlinedIcon fontSize="medium" className="me-[14px]" sx={{ color: '#A2B6C9' }} />
                    <span>Фидбек</span>
                </NavLink>
                <button onClick={logout} className="text-[14px] text-[#2870ED] rounded-xl px-[18px] font-normal mb-6 flex items-center h-12 hover:bg-[#E4EAF0]">
                    <LogoutOutlinedIcon fontSize="medium" className="me-[14px]" sx={{ color: '#A2B6C9' }} />
                    <span>Одјави се</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidePanel;