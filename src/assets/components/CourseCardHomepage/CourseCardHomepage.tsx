import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary

interface CourseCardHomepageProps {
  title: string;
  description: string;
  buttonText: string;
  theme?: 'green' | 'purple';
}

const CourseCardHomepage: React.FC<CourseCardHomepageProps> = ({
  title,
  description,
  buttonText,
  theme = 'green',
}) => {
  const headerClasses = theme === 'purple' 
    ? 'bg-[#721c7a] text-purple-100'
    : 'bg-[#02a3a4] text-white';

  const borderClasses = theme === 'purple' 
    ? 'border-[#721c7a]' 
    : 'border-[#02a3a4]';

  const buttonClasses = theme === 'purple'
    ? 'bg-[#721c7a] hover:bg-[#5c165f]'
    : 'bg-[#02a3a4] hover:bg-[#017e82]';

  return (
    <div className="mb-8 w-full flex justify-center">
      <div className={`border-4 rounded-lg ${borderClasses}`}>
        {/* Header */}
        <div className={`p-2 ${headerClasses}`}>
          <h5 className="text-xl font-bold mb-0">{title}</h5>
        </div>
        {/* Body */}
        <div className="p-4">
          <p className={`pt-3 pb-3 ${theme === 'green' ? 'text-[#017e82]' : 'text-[#5c165f]'}`}>
            {description}
          </p>
          <a
            href="#"
            className={`flex items-center justify-start ${buttonClasses} w-fit text-white h-10 rounded-md transition-colors duration-300 px-4`} // Dynamic width based on content
          >
            {buttonText}
            <img src={arrow} className='ml-2' alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCardHomepage;
