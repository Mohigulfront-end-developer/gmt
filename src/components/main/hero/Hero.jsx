import { Carousel } from 'antd';
import Img from "../../../../public/assets/Vector.png"


const Hero = () => {
  return (
    <div className="bg-[#F8F7F3] pt-[30px]">
      <div className="container">
        <Carousel autoplay arrows infinite={false}>
          <div className="bg-[#E5E4ED]   border rounded-xl">
            <div className="lg:flex justify-between  grid grid-cols-1">
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

              <img src={Img} alt="" className="sm:w-[100%] lg:w-[50%]" />
            </div>
          </div>
          <div className="bg-[#E5E4ED]   border rounded-xl">
            <div className="lg:flex justify-between  grid grid-cols-1  ">
              <div className="sm:w-[100%] lg:w-[50%] px-[60px] py-[33px]">
                <h1 className="lg:w-[85%] text-[#202020] text-[48px] font-medium leading-none mb-[25px]">
                  Заголовок баннера в пару строк
                </h1>
                <p className="sm:w-[100%] lg:w-[60%] text-[18px] text-[#7A7687]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex items-center gap-5 mt-[65px] sm:w-[100%] lg:w-[70%] ">
                  <button className="sm:w-[100%] lg:w-[65%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
                    Запросить цену
                  </button>
                  <button className="sm:w-[100%] lg:w-[50%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-6 hover:bg-[#088269] hover:text-white">
                    В каталог
                  </button>
                </div>
              </div>

              <img src={Img} alt="" className="sm:w-[100%] lg:w-[50%]" />
            </div>
          </div>
          <div className="bg-[#E5E4ED]   border rounded-xl">
            <div className="lg:flex justify-between  grid grid-cols-1 ">
              <div className="sm:w-[100%] lg:w-[50%] px-[60px] py-[33px]">
                <h1 className="lg:w-[85%] text-[#202020] text-[48px] font-medium leading-none mb-[25px]">
                  Заголовок баннера в пару строк
                </h1>
                <p className="sm:w-[100%] lg:w-[60%] text-[18px] text-[#7A7687]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex items-center gap-5 mt-[65px] sm:w-[100%] lg:w-[70%] ">
                  <button className="sm:w-[100%] lg:w-[65%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
                    Запросить цену
                  </button>
                  <button className="sm:w-[100%] lg:w-[50%] border text-[14px] font-semibold border-[#D5D1E1] rounded-full bg-transparent py-2 px-6 hover:bg-[#088269] hover:text-white">
                    В каталог
                  </button>
                </div>
              </div>

              <img src={Img} alt="" className="w-[50%]" />
            </div>
          </div>
          <div className="bg-[#E5E4ED]   border rounded-xl">
            <div className="xl:flex sm:flex justify-between  grid grid-cols-1 ">
              <div className="w-[100%] xl:w-[50%] sm:w-[50%] px-[60px] py-[33px]">
                <h1 className="xl:w-[85%] sm:w-[100%] text-[#202020] text-[48px] font-medium leading-none mb-[25px]">
                  Заголовок баннера в пару строк
                </h1>
                <p className="w-[100%] xl:w-[60%] sm:w-[100%] text-[18px] text-[#7A7687]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex items-center gap-5 mt-[65px] w-[100%] xl:w-[70%] sm:w-[100%] ">
                  <button className="w-[100%] xl:w-[65%] sm:w-[100%] border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
                    Запросить цену
                  </button>
                  <button className="w-[100%] xl:w-[50%] sm:w-[50%] border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-6 hover:bg-[#088269] hover:text-white">
                    В каталог
                  </button>
                </div>
              </div>

              <img src={Img} alt="" className="w-[100%] xl:w-[50%] sm:w-[70%] sm:h-[full] object-center object-fill  " />
            </div>
          </div>
        </Carousel>
        <br />
      </div>
    </div>
  );
}

export default Hero



