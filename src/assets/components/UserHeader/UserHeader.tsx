
const UserHeader = () => {
  return (
    <header className="bg-[#2870ED] h-[96px] w-screen text-white rounded-b-lg fixed top-0 px-10 z-10">
      <div className="h-full flex justify-end items-center">
        <div className="relative">
            <input type="text" className="h-[44px] w-[400px] ps-10 pe-3 placeholder:text-white focus:outline-none rounded-xl bg-transparent border-2 border-white" placeholder='Пребарај содржина...'/>
            <img src="/src/assets/images/SearchIcon.svg" className="absolute top-[13px] left-3" />
        </div>
        <button className="p-0 h-[44px] w-[44px] flex justify-center items-center bg-transparent focus:outline-none rounded-xl ml-16">
          <img
            src="/src/assets/images/NotifBell.svg"
            alt="notification"
            className="h-[24px] w-[24px]"
          />
        </button>
        <div className="flex items-center ms-6">
            <img
                src="/src/assets/images/ProfilePicture.png"
                alt="profile"
                className="h-[40px] w-[40px] rounded-xl border-[3px] border-[#004E6E] me-2"
            />
            <div>
                <p className="text-[14px] font-bold">Име Презиме</p>
                <p className="text-[10px] font-medium">Улога</p>
            </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
