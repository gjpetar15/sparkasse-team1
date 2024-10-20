import logo from '/src/assets/Images/VibeOn_NewLogo.svg';
import sparkasseLogo from '/src/assets/Images/Sparkasse_logo.svg';
import linkedinLogo from '/src/assets/Images/LinkedIn_logo.svg'; 
import instagramLogo from '/src/assets/Images/Instagram_logo.svg';
import facebookLogo from '/src/assets/Images/Facebook_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="footer-line bg-black h-[2px] w-full" />
      {/* Footer Nav */}
      <div className="container-nav w-full">
        <nav className="flex justify-between items-center p-4 w-full">
          {/* Left side logo */}
          <a href="#" className="ml-5">
            <img src={logo} alt="Logo" className="logo w-16 h-auto" />
          </a>
          {/* Navbar content */}
          <div className="flex justify-center flex-grow">
            {/* Centered Menu */}
            <ul className="flex space-x-20 footer-nav-ul">
              <li>
                <a href="#" className="text-black no-underline">Контакт</a>
              </li>
              <li>
                <a href="#" className="text-black no-underline">ЧПП</a>
              </li>
              <li>
                <a href="#" className="text-black no-underline">Политика за приватност</a>
              </li>
            </ul>
          </div>
          {/* Right side social icons */}
          <div className="flex space-x-4 mr-5">
            <a href="#">
              <img src={sparkasseLogo} alt="Sparkasse" className="h-8" />
            </a>
            <a href="#">
              <img src={linkedinLogo} alt="LinkedIn" className="h-8" />
            </a>
            <a href="#">
              <img src={instagramLogo} alt="Instagram" className="h-8" />
            </a>
            <a href="#">
              <img src={facebookLogo} alt="Facebook" className="h-8" />
            </a>
          </div>
        </nav>
      </div>
      <div className="botom-link text-center my-3">
        <a href="#" className="no-underline">
          &copy; VibeOnEdu
        </a>
      </div>
    </footer>
  );
};

export default Footer;