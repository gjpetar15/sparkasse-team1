import { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "„Финансиската слобода е достапна за оние кои учат за неа и работат за неа.“", author: "Роберт Киосаки" },
  { text: "„Успехот не е конечен, неуспехот не е фатален: важно е да се има храброст да се продолжи.“", author: "Винстон Черчил" },
  { text: "„Најдобар начин да го предвидите иднината е да ја создадете.“", author: "Питер Дракер" }
];

const CarouselSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12" style={{ backgroundColor: 'var(--your-default-background-color)' }}>
      {/* Title without logo */}
      <div className="container mx-auto text-left mb-8 pb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="font-bold text-[#ff6130]">VibeOn</span> 
          <span className="font-normal text-black"> Патокази за успех</span>
        </h2>
      </div>

      {/* Carousel (quotes) */}
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full max-w-7xl text-center">
          {/* Quote */}
          <p className="text-3xl text-gray-700 mb-4">{quotes[activeIndex].text}</p>

          {/* Author */}
          <p className="text-2xl text-right text-gray-500 font-semibold">{quotes[activeIndex].author}</p>
        </div>

        {/* Pagination (bottom dots) */}
        <div className="flex justify-center mt-6">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={`h-5 w-5 rounded-md mx-1 ${
                index === activeIndex ? 'bg-[#ff6130]' : 'bg-[#ffb39b]'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
