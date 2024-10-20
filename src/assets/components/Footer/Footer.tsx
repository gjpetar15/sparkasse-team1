const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="text-black text-lg">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-black text-lg">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="text-black text-lg">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="footer-line bg-black h-1 w-full mt-4"></div>
        <p className="text-black mt-4">© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
