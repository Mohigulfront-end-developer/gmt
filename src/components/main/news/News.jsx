import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../../data/news";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

const Brend = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f8f7f3]  py-[150px]">
      <div className="container flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <div className="flex justify-between">
            <h1 className="text-[30px] font-medium">Новости компании</h1>
            <button className="px-5 py-3 hidden sm:block md:hidden  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Все новости
            </button>
          </div>
        </div>
        <div className="h-[430px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="w-[320px] border-[1px] bg-[#f8f7f3]  rounded-lg"
                >
                  <div className="w-full h-[250px]  flex items-center justify-center rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full rounded-t-lg"
                    />
                  </div>
                  <div className=" px-[14px] py-[20px]">
                    <span className="text-[14px] font-normal text-[#7A7687]">
                      {item.time}
                    </span>
                    <h2 className="text-[#202020] text-[12px] sm:text-[18px] font-semibold mb-[8px] w-full sm:w-[80%]">
                      {item.title}
                    </h2>
                    <p className="text-[15px] font-medium text-[#7A7687]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between  ">
            <div className="hidden md:flex gap-3 ml-3">
              <button
                className="p-[10px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <HiArrowSmLeft className="w-[25px] h-[25px] hover:text-green-600" />
              </button>
              <button
                className="p-[10px] rounded-full border flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <HiArrowSmRight className="w-[25px] h-[25px] hover:text-green-600" />
              </button>
            </div>
            <button className="px-5 py-3 font-semibold  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Все новости
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
