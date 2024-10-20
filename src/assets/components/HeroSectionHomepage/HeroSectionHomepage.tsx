const HeroSectionHomepage = () => {
  return (
    <section className="bg-orange-500 w-full h-screen relative">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="hero-section-left w-full md:w-1/2 px-4">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Your Hero Title
          </h1>
          <p className="text-lg text-white mt-4">
            This is your hero description. Add any compelling copy here.
          </p>
          <a href="#" className="text-sm font-normal text-white underline mt-8 inline-block">
            Learn More
          </a>
        </div>
        <div className="hero-section-right hidden md:block">
          <img src="/src/assets/Images/HeroSection_illustration.png" alt="Hero" className="max-h-96" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHomepage;
