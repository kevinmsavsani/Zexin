import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";

const Carousel = ({ slides }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide: any, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-left p-8 max-w-xl">
              <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
              <p className="mt-4 text-lg text-white">{slide.description}</p>
              <button
                className="mt-8 bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={() => navigate("/products")}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-700"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-700"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Carousel;
