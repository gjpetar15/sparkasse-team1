import Button from '@mui/material/Button';
import logo from '/src/assets/Images/VibeOn_NewLogo.svg'; // Update the path as necessary
import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary
import { Link } from 'react-router-dom';

const HomepageHeader = () => {
  return (
    <header className="absolute w-full flex justify-center">
      <div className="container mx-auto mt-8">
        <nav className="bg-blue-600 border-2 border-white rounded-lg">
          <div className="flex justify-between items-center p-4">
            {/* Left side logo */}
            <a href="#" className="ml-10">
              <img src={logo} alt="Logo" className="w-16 h-auto ps-2" />
            </a>
            {/* Navbar content */}
            <div className="flex justify-center" id="navbarNav">
              {/* Centered Menu */}
              <ul className="flex space-x-[80px]">
                <li>
                  <Link to="#" className="text-white text-[16px] hover:underline hover:text-white">Почетна</Link>
                </li>
                <li>
                  <Link to="#" className="text-white text-[16px] hover:underline hover:text-white">Курсеви</Link>
                </li>
                <li>
                  <Link to="#" className="text-white text-[16px] hover:underline hover:text-white">VibeOn Edu</Link>
                </li>
                <li>
                  <Link to="#" className="text-white text-[16px] hover:underline hover:text-white">Шпаркасе Банка</Link>
                </li>
                <li>
                  <Link to="#" className="text-white text-[16px] hover:underline hover:text-white">Контакт</Link>
                </li>
              </ul>
            </div>
            {/* Right side buttons */}
            <div className="flex space-x-5 mr-10">
              <Button
                sx={{
                  backgroundColor: "#FF6130",
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  height: '40px',
                  textTransform: 'none',
                  padding: '16px 24px',
                  borderRadius: '4px',
                  border: '1px solid #000000',
                  '&:hover': {
                    backgroundColor: '#d34f26',
                  },
                }}
              >
                Регистрација
                <img src={arrow} className='ms-2' alt="Arrow" />
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FF6130",
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  height: '40px',
                  textTransform: 'none',
                  padding: '16px 24px',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#d34f26',
                  },
                }}
              >
                Најава
                <img src={arrow} className='ms-2' alt="Arrow" />
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomepageHeader;
