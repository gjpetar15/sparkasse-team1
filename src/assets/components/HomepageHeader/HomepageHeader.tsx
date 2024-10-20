import PrimaryButton from "../PrimaryButton/PrimaryButton";

const HomepageHeader = () => {
  return (
    <header className="absolute z-2 w-full">
      <div className="container mx-auto mt-4 px-4">
        <nav className="bg-blue-600 border-2 border-white rounded-lg p-0">
          <ul className="flex justify-between items-center">
            <li className="ml-10">
              <img src="logo.png" alt="Logo" className="w-14 h-20" />
            </li>
            <li className="flex space-x-8">
              <a href="#" className="text-white text-lg">
                Home
              </a>
              <a href="#" className="text-white text-lg">
                About
              </a>
              <a href="#" className="text-white text-lg">
                Services
              </a>
              <a href="#" className="text-white text-lg">
                Contact
              </a>
            </li>
            <div className="flex space-x-4">
              <PrimaryButton />
              {/* <button className="border border-black px-4 py-2 rounded text-black">
                Login
              </button> */}
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400">
                Sign Up
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomepageHeader;
