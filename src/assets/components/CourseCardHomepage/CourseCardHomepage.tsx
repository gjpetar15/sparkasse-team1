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
    ? 'bg-purple-600 text-purple-100'
    : 'bg-green-600 text-white';

  const borderClasses = theme === 'purple' 
    ? 'border-purple-600' 
    : 'border-green-600';

  const buttonClasses = theme === 'purple'
    ? 'bg-purple-600 hover:bg-purple-700'
    : 'bg-green-600 hover:bg-green-700';

  return (
    <div className="mb-8 w-full sm:w-1/2">
      <div className={`border-4 rounded-lg ${borderClasses}`}>
        {/* Header */}
        <div className={`p-2 ${headerClasses}`}>
          <h5 className="text-xl font-bold mb-0">{title}</h5>
        </div>
        {/* Body */}
        <div className="p-4">
          <p className={`pt-3 pb-3 ${theme === 'green' ? 'text-green-700' : 'text-purple-700'}`}>
            {description}
          </p>
          <a
            href="#"
            className={`flex items-center justify-start ${buttonClasses} text-white h-10 rounded-md border border-black transition-colors duration-300 px-4`} // Dynamic width based on content
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
