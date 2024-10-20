import { Button } from '@mui/material';
import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary

const SingleBannerSection = () => {
  return (
    <section className="bg-teal-500 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-4 text-white pb-10">
          Земи го твоето место меѓу овие 10%!
        </h2>
        <Button
          sx={{
            backgroundColor: "#721c7a", // Original color
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
            height: '40px',
            textTransform: 'none',
            padding: '16px 24px',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#5d165f', // Darker shade of the original color
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

export default SingleBannerSection;
