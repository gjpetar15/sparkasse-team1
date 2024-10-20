const Icon = ({ src, alt, text }: {src: string, alt: string, text: string}) => {
  return (
    <div className="w-full md:w-1/4 mb-3 flex flex-col items-center justify-end">
      <div className="flex justify-center">
        <img src={src} alt={alt} className="max-h-[100px] mx-1" />
      </div>
      <div className="text-center text-white mt-2">
        <p className="mb-0 text-base font-normal leading-[40px]">{text}</p>
      </div>
    </div>
  );
};

export default Icon;
