
import Icon1 from "../../../public/assets/delivery/icon1.svg"
import Icon2 from "../../../public/assets/delivery/icon2.svg";

import Icon4 from "../../../public/assets/delivery/icon4.svg";
import Icon5 from "../../../public/assets/delivery/icon5.svg";


const PositiveSide = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container py-[150px]">
        <h2 className="text-[30px] font-medium">С нами выгодно и удобно</h2>
        <div className="grid lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 sm:justify-center items-center gap-[10px] justify-between py-10">
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon1} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Доставка по всей России
            </p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon2} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Собственный склад с продукцией
            </p>
          </div>

          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon4} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Доставка по всей России
            </p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]">
            <img src={Icon5} alt="" className="w-[65px] h-[65px]" />
            <p className="text-[16px] font-medium mt-[20px] text-center">
              Безопасные способы оплаты
            </p>
          </div>
        </div>
        <button className="bg-[#088269] text-[16px] font-semibold text-[#F8F7F3] px-[30px] py-[12px] rounded-full border ml-[79%]">
          Проверить статус доставки
        </button>
      </div>
    </div>
  );
}

export default PositiveSide