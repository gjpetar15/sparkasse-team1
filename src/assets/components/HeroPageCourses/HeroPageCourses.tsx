import React from 'react';

interface HeroPageCoursesProps {
  leftBgColor?: string;
  rightBgColor?: string;
}

const HeroPageCourses: React.FC<HeroPageCoursesProps> = ({
  leftBgColor = '#0CB43F', // Default color for the first div
  rightBgColor = '#028661', // Default color for the second div
}) => {
  return (
    <section className="w-full" style={{ height: '66vh' }}> {/* 2/3 of the viewport height */}
      <div className="grid grid-cols-4 h-full">
        {/* First div with dynamic background color */}
        <div className={`col-span-3 flex flex-col justify-center pl-20 px-20 pt-20`} style={{ backgroundColor: leftBgColor }}>
          <h1 className="text-white text-6xl font-bold mb-14">Научи за себе.</h1>
          <p className="text-white text-4xl">Модул фокусиран на финансиска писменост и управување со буџет.</p>
        </div>
        
        {/* Second div with dynamic background color */}
        <div className={`col-span-1 flex items-center justify-center`} style={{ backgroundColor: rightBgColor }}>
          <p className="text-white text-4xl text-start mt-40 ps-8">4+ курсеви.<br />16+ бесплатни сертификати.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPageCourses;
