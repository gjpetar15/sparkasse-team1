import { Button } from '@mui/material';
import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary

const SingleBannerCoursesSection = () => {
  return (
    <section style={{ backgroundColor: '#FF6130' }} className="py-10"> {/* Full section background */}
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-white pb-10 pt-7">
          80% од успешните луѓе имале финансиско образование.
        </h2>
        
        {/* Button with hover effect */}
        <Button
          sx={{
            backgroundColor: "#2870ED", // Original color of the button
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
            height: '40px',
            textTransform: 'none',
            padding: '16px 24px',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#1F5DBA', // Darker shade for hover
            },
          }}
        >
          Започни сега
          <img src={arrow} className="ms-2" alt="Arrow" /> {/* Arrow image with margin */}
        </Button>
      </div>
    </section>
  );
};

export default SingleBannerCoursesSection;
