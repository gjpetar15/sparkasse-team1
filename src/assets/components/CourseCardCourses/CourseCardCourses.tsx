import { Button } from '@mui/material';
import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary
import { FC } from 'react';

// Import your SVG icons here
import Icon1 from '/src/assets/Images/BookCard.svg'; // Update with actual path
import Icon2 from '/src/assets/Images/ClockCard.svg'; // Update with actual path

interface CourseCardCoursesProps {
  theme: 'green' | 'pink';
  title: string;
  description: string;
  text1: string;
  text2: string;
}

const themeStyles = {
  green: {
    borderColor: '#0CB43F',
    buttonColor: '#0CB43F',
    hoverButtonColor: '#028661',
    titleColor: '#0CB43F', // Title color for green theme
  },
  pink: {
    borderColor: '#FF4B8E',
    buttonColor: '#FF4B8E',
    hoverButtonColor: '#D43B72',
    titleColor: '#FF4B8E', // Title color for pink theme
  },
};

const CourseCardCourses: FC<CourseCardCoursesProps> = ({
    theme,
    title,
    description,
    text1,
    text2,
  }) => {
    const styles = themeStyles[theme];
  
    return (
      <div
        className="p-6 rounded-lg border-2 flex flex-col"
        style={{ borderColor: styles.borderColor }}
      >
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-left" style={{ color: styles.titleColor }}>
          {title}
        </h3>
  
        {/* Description */}
        <p className="text-left mb-4" style={{ height: 'auto', overflow: 'hidden' }}>
          {description}
        </p>
  
        {/* Icon and Text 1 */}
        <div className="flex items-center mb-2">
          <img src={Icon1} alt="Icon 1" className="h-6 w-6" />
          <p className="ml-2 text-sm" style={{ color: 'black' }}>{text1}</p>
        </div>
  
        {/* Icon and Text 2 */}
        <div className="flex items-center mb-6">
          <img src={Icon2} alt="Icon 2" className="h-6 w-6" />
          <p className="ml-2 text-sm" style={{ color: 'black' }}>{text2}</p>
        </div>
  
        {/* Button */}
        <div className="text-center">
          <Button
            sx={{
              backgroundColor: styles.buttonColor,
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF',
              height: '40px',
              textTransform: 'none',
              padding: '16px 24px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: styles.hoverButtonColor,
              },
            }}
          >
            Брз преглед
            <img src={arrow} className="ms-2" alt="Arrow" />
          </Button>
        </div>
      </div>
    );
  };

export default CourseCardCourses;
