import { useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Data from "../../data/catalog";
import { Link, useNavigate } from "react-router-dom";


const CategoryProduct = () => {
  const navigate = useNavigate();


  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
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
    <div className="bg-[#f8f7f3]   py-[100px] ">
      <div className=" container flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full ">
          <div className="flex justify-between">
            <div className="">
              <h2 className="mb-[20px] text-[30px] font-medium">
                Популярные <br />категории
              </h2>
            </div>

            <div className="flex sm:gap-2 sm:h-[40px]">
              <button className="sm:px-2 sm:py-[4px] font-medium sm:text-[14px]  px-5 py-3 hidden sm:block md:hidden  rounded-full border text-[14px] text-[#fff] bg-[#088269] hover:bg-[#07745E]">
                Все категории
              </button>
            </div>
          </div>
        </div>

        <div className="h-[330px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="w-[320px] border-[1px] bg-[#f8f7f3]  rounded-lg transform "
                >
                  <div className="w-full h-[250px]  flex items-center justify-center rounded-lg">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain rounded-t-xl bg-white p-10 cursor-pointer "
                      onClick={() =>
                        navigate(`/katalog/laboratornoe/${item.id}`)
                      }
                    />
                  </div>

                  <div
                    className="p-4 h-[80px]"
                    onClick={() => navigate(`/katalog/laboratornoe/${item.id}`)}
                  >
                    <h3 className="  text-[16px] font-medium  text-[#202020]">
                      {item.title1}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className=" flex sm:hidden md:flex justify-center md:justify-between">
            <div className="hidden md:flex gap-3 ml-3 ">
              <div
                onClick={() => sliderRef.current.slickNext()}
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
              >
                <GoArrowLeft className="w-[25px] h-[25px] " />
              </div>
              <div
                onClick={() => sliderRef.current.slickPrev()}
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
              >
                <GoArrowRight className="w-[25px] h-[25px] " />
              </div>
            </div>

            <div className=" flex  gap-4 h-[40px]  md:gap-4 justify-items-end ">
              <Link to={"/katalog/laboratornoe"} className=" px-4 py-[4px] text-[14px] transition duration-300 flex justify-center items-center md:px-6 lg:py-[11px] rounded-full font-semibold lg:text-[16px] text-white bg-[#088269] border-none ">
                Все категории
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
