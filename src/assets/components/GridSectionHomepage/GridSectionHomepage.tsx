import arrow from '/src/assets/Images/Arrow_right.svg'; // Update the path as necessary

const GridSectionHomepage = () => {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg-cards.jpg')" }}>
      <div className="grid grid-cols-4 grid-rows-2 h-full">
        {/* Purple Card (1st position) */}
        <div className="bg-[#721c7a] p-4 flex flex-col justify-between"></div>

        {/* Orange Card (2nd position) */}
        <div className="bg-[#FF6130] p-4 flex flex-col justify-between">
          <span className="text-white text-6xl font-bold">1.</span>
          <div>
            <h2 className="text-white text-2xl font-bold leading-[38.73px] pt-[30%]">Научи да раководиш со своите финансии</h2>
            <p className="text-white text-base leading-6">Освој ги техниките за управување со твоите лични финансии.</p>
          </div>
        </div>

        {/* Second Text Card (spanning 1 column) */}
        <div className="bg-transparent p-4 flex flex-col justify-between">
          <span className="text-blue-700 text-6xl font-bold">2.</span>
          <div>
            <h2 className="text-blue-700 text-2xl font-bold leading-[38.73px] pt-[30%]">Започни да го планираш својот бизнис</h2>
            <p className="text-blue-700 text-base leading-6">Учи од најдобрите и добиј практични вештини за поставување на твојот стартап.</p>
          </div>
        </div>

        {/* Empty Card (spanning vertically across 2 rows) */}
        <div className="col-span-1 row-span-2 flex items-center justify-end p-4">
        <img src="src/assets/Images/Grid_illustration.png" alt="Vertical Image" className="max-h-full w-auto" />
        </div>

        {/* Third Text Card (spanning two columns) */}
        <div className="bg-transparent p-4 flex flex-col justify-between col-span-2">
          <span className="text-blue-700 text-6xl font-bold">3.</span>
          <div>
            <h2 className="text-blue-700 text-2xl font-bold leading-[38.73px] pt-[25%]">Освој го светот!</h2>
            <p className="text-blue-700 text-base leading-6">Со сето знаење што ќе го стекнеш и сите сертификати кои ќе ги добиеш бесплатно, ќе бидеш подготвен/а да го освоиш светот!</p>
          </div>
        </div>

        {/* Teal Image Card (rotated SVG) */}
        <div className="bg-[#02A3A4] p-4 flex flex-col justify-end">
          <img src={arrow} alt="Arrow" className="transform rotate-90 max-h-[100px] w-auto pr-2" />
        </div>

      </div>
    </section>
  );
};

export default GridSectionHomepage;
