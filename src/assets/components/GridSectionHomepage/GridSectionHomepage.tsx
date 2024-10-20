
const GridSectionHomepage = () => {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(src/assets/bg-cards.jpg)' }}>
      <div className="container mx-auto grid grid-cols-4 grid-rows-2 gap-0">
        <div className="col-span-2 bg-purple-700 p-8 text-white">
          <h2 className="text-2xl font-bold">Purple Card</h2>
          <p className="text-lg mt-2">Content of the card goes here.</p>
        </div>
        <div className="bg-orange-500 p-8 text-white">
          <h2 className="text-2xl font-bold">Orange Card</h2>
          <p className="text-lg mt-2">Content of the card goes here.</p>
        </div>
        <div className="bg-teal-500 p-8 text-white">
          <h2 className="text-2xl font-bold">Teal Card</h2>
          <p className="text-lg mt-2">Content of the card goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default GridSectionHomepage;
