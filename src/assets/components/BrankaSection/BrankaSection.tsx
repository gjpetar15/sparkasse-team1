import brankaImage from '/src/assets/Images/BrankaiGordan.png'; // Update the path as necessary

const BrankaSection = () => {
  return (
    <section className="h-[66vh] bg-[#02A3A4] flex items-center">
      <div className="container mx-auto flex flex-wrap justify-center items-center px-4 md:px-8">
        {/* Image on the left */}
        <div className="md:w-1/3 text-left pr-5">
          <img src={brankaImage} alt="Branka i Gordan" className="img-fluid rounded-lg" />
        </div>

        {/* Text card on the right */}
        <div className="md:w-2/3 flex items-center">
          <div className="text-white">
            <p className="mb-4 text-[32px] font-normal leading-[48px]">
              Запознај ги <b>Бранка и Гордан</b> – твоите водичи низ оваа платформа.
              Тие ќе ти помогнат да го совладаш светот на финансиите на брз и лесен начин, и да го фатиш вајбот! Еве како изгледа процесот тука!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrankaSection;
