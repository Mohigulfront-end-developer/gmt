import Slider from "react-slick";
import Img from "../../../../public/assets/Vector.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useRef } from "react";

export default function SimpleSlider() {
  const carouselRef = useRef(null);

  const previous = () => {
    carouselRef.current.slickPrev();
  };

  const next = () => {
    carouselRef.current.slickNext();
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#F8F7F3] pt-[30px]">
      <div className="container relative">
        <Slider ref={carouselRef} {...settings}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-[#E5E4ED] border rounded-xl">
              <div className="lg:flex justify-between grid grid-cols-1 rounded-xl">
                <div className="sm:w-[100%] lg:w-[50%] px-[60px] py-[33px]">
                  <h1 className="lg:w-[85%] text-[#202020] text-[48px] font-medium leading-none mb-[25px]">
                    Заголовок баннера в пару строк
                  </h1>
                  <p className="sm:w-[100%] lg:w-[60%] text-[18px] text-[#7A7687]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <div className="flex items-center gap-5 mt-[65px] sm:w-[100%] lg:w-[70%]">
                    <button className="sm:w-[100%] lg:w-[65%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
                      Запросить цену
                    </button>
                    <button className="sm:w-[100%] lg:w-[50%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-6 hover:bg-[#088269] hover:text-white">
                      В каталог
                    </button>
                  </div>
                </div>
                <div className="relative lg:w-[50%] flex items-center justify-center">
                  <img
                    src={Img}
                    alt=""
                    className="w-full h-full object-cover object-left rounded-r-lg"
                  />
                  <div className="flex gap-2 absolute bottom-4 right-4">
                    <button
                      className="border rounded-full bg-white p-2"
                      onClick={previous}
                    >
                      <GoArrowLeft className="hover:text-green-600 w-[20px] h-[20px]" />
                    </button>
                    <button
                      className="border rounded-full bg-white p-2"
                      onClick={next}
                    >
                      <GoArrowRight className="hover:text-green-600 w-[20px] h-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <br />
      </div>
    </div>
  );
}
