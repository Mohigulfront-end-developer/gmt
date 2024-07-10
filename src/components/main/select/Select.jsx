import Light from "../../../../public/Icons/light.svg";
import Snow from "../../../../public/Icons/snow.svg";
import Volna from "../../../../public/Icons/volna.svg";
import Number from "../../../../public/Icons/number.svg";

const Select = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container py-[150px]">
        <h2 className="font-medium text-[30px]">Почему выбирают нас?</h2>
        <div className="grid lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 sm:justify-center items-center gap-[10px] justify-between py-10">
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[41px]">
            <img src={Light} alt="" className="w-[36px] h-[75px]" />
            <p className="text-[16px] font-medium">Весь товар сертифицирован</p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[41px]">
            <img src={Snow} alt="" className="w-[65px] h-[73px]" />
            <p className="text-[16px] font-medium">Гибкая система скидок</p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[55px]">
            <img src={Volna} alt="" className="w-[62px] h-[55px]" />
            <p className="text-[16px] font-medium">Лет на рынке</p>
          </div>
          <div className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[50px]">
            <img src={Number} alt="" className="w-[36px] h-[60px]" />
            <p className="text-[16px] font-medium">Быстрая доставка</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
