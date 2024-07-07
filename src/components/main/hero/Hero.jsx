import Slider from "react-slick";
import Img from "../../../../public/assets/hero/Vector.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useRef, useState } from "react";
import Modal from "./Modal"; // Make sure to update the path based on your file structure

export default function SimpleSlider() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const carouselRef = useRef(null);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };


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
                    <button
                      onClick={handleOpenModal}
                      className="sm:w-[100%] lg:w-[65%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white"
                    >
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
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {/* You can add your login form or content here */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
