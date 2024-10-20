import heroIllustration from '/src/assets/Images/HeroSection_illustration.png'; // Update the path as necessary
import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary
import Button from '@mui/material/Button';

const HeroSectionHomepage = () => {
  return (
    <section className="w-full h-screen grid grid-cols-12">
      {/* Left section with orange background */}
      <div className="bg-[#FF6130] flex justify-center items-center col-span-6">
        <div className="text-left px-20">
          <h1 className="font-['Inter'] text-[64px] font-bold leading-[80px] text-white mb-4">
            Развивај паметни финансиски вештини.
          </h1>
          <p className="font-['Inter'] text-[24px] font-normal leading-[40px] text-white mb-4">
            Прва и единствена платформа за финансиска едукација на млади на Sparkasse Bank.
          </p>
          <Button
            sx={{
              backgroundColor: "#2870ED", // Set the button color to blue
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF', // Set text color to white
              height: '40px',
              textTransform: 'none',
              padding: '16px 24px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#0056b3', // Darker blue for hover effect
              },
            }}
          >
            Започни сега
            <img src={arrow} className='ml-2' alt="Arrow" />
          </Button>
        </div>
      </div>

      {/* Right section with teal background */}
      <div className="bg-[#02A3A4] flex justify-center items-center col-span-6">
        <img src={heroIllustration} alt="Hero Illustration" className="max-h-[700px] max-w-[715px] mt-20" />
      </div>
    </section>
  );
};

export default HeroSectionHomepage;
