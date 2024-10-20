const NumbersSection = () => {
  return (
    <section className="py-14"> {/* Padding for top and bottom */}
      <div className="container mx-auto max-w-screen-lg"> {/* Center container with max width */}
        <div className="flex justify-between space-x-8"> {/* Flex row with space between cards */}
          
          {/* First Statistic Card */}
          <div className="flex-1 flex flex-col items-start"> {/* Card layout */}
            <div className="statistic-card flex flex-col items-start p-3">
              <div className="flex items-center mb-2">
                <div className="w-3 h-12 bg-[#FF6130] mr-2"></div> {/* Orange rectangle */}
                <h2 className="text-[#2870ED] font-bold text-5xl">157K</h2> {/* Blue number */}
              </div>
              <div className="mt-1">
                <p className="text-[#02A3A4] text-lg leading-8">Млади на возраст од 18-25 години.</p> {/* Green text */}
              </div>
            </div>
          </div>

          {/* Second Statistic Card */}
          <div className="flex-1 flex flex-col items-start"> {/* Card layout */}
            <div className="statistic-card flex flex-col items-start p-3">
              <div className="flex items-center mb-2">
                <div className="w-3 h-12 bg-[#FF6130] mr-2"></div> {/* Orange rectangle */}
                <h2 className="text-[#2870ED] font-bold text-5xl">40%</h2> {/* Blue number */}
              </div>
              <div className="mt-1">
                <p className="text-[#02A3A4] text-lg leading-8">Од нив се студенти</p> {/* Green text */}
              </div>
            </div>
          </div>

          {/* Third Statistic Card */}
          <div className="flex-1 flex flex-col items-start"> {/* Card layout */}
            <div className="statistic-card flex flex-col items-start p-3">
              <div className="flex items-center mb-2">
                <div className="w-3 h-12 bg-[#FF6130] mr-2"></div> {/* Orange rectangle */}
                <h2 className="text-[#2870ED] font-bold text-5xl">10%</h2> {/* Blue number */}
              </div>
              <div className="mt-1">
                <p className="text-[#02A3A4] text-lg leading-8">Од нив се студенти претприемачи</p> {/* Green text */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
