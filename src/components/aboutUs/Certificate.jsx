import  { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Data  from "../../data/certificate";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {  useNavigate } from "react-router-dom";

const Certificate = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    
  

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f8f7f3]  py-[150px]">
      <div className="container flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <div className="flex justify-between">
            <h1 className="text-[30px] font-medium">Сертификаты <br /> на продукцию</h1>
          </div>
        </div>
        <div className=" md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {Data.map((slide, index) => (
                <div
                  key={index}
                  className="w-[220px] h-[280px] border bg-[#fff]  rounded-lg p-[10px] "
                   onClick={() =>
                        navigate(`/o-kompanii/certificate${slide.id}`)
                      }
                >
                   <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
                 
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between  ">
            <div className="hidden md:flex gap-3 ml-3">
              <button
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GoArrowLeft className="w-[22px] h-[22px] " />
              </button>
              <button
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <GoArrowRight className="w-[22px] h-[22px] " />
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
