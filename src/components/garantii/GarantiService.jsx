import Icon1 from "../../../public/assets/garantii/img1.svg";
import Icon2 from "../../../public/assets/garantii/img2.svg";
import Icon3 from "../../../public/assets/garantii/img3.svg";
import Icon4 from "../../../public/assets/delivery/icon5.svg";


const GarantiiService = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container py-[100px] ">
        <h2 className="text-[30px] font-medium">Перечень гарантийных услуг</h2>
        <div className="grid lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 sm:justify-center items-center gap-[10px] justify-between py-10">
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon1} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Установка, настройка и пуско-наладка медтехники
            </p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon2} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Сервисное обслуживание медицинской техники любой комплектации
            </p>
          </div>

          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon4} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Гарантийное и постгарантийное обслуживание
            </p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon3} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Диагностика и проведение профилактических работ
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <button className="bg-transparent text-[16px] font-semibold text-[#088269] px-[30px] py-[12px] rounded-full border hover:border-[#088269]">
            Гарантийный случай
          </button>
          <button className="bg-[#088269] text-[16px] font-semibold text-[#F8F7F3] px-[30px] py-[12px] rounded-full border hover:bg-[#07745E]">
            Замена товара
          </button>
        </div>
      </div>
    </div>
  );
};

export default GarantiiService;
