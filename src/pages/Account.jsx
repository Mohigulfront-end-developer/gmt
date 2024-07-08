import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Vkontakt from "../../public/assets/signin/vk.svg"
import Facebook from "../../public/assets/signin/facebook.svg";
import Instagram from "../../public/assets/signin/instagram.svg";
import Twitter from "../../public/assets/signin/twitter.svg";
import Ok from "../../public/assets/signin/ok.svg";
import Pen from "../../public/assets/signin/edit.svg";
import InformCustomer from "../components/account/InformCustomer";
import HistoryOrder from "../components/account/HistoryOrder";
import Settings from "../components/account/Settings";




const Account = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/profil"} className="">
            Личный кабинет
          </NavLink>
        </div>
        <div className="flex gap-[120px] mt-[100px]">
          <span className="text-bold text-[70px] border rounded-full bg-[#E1EFE6] text-[#23473B] px-[80px] py-[50px]">
            K
          </span>

          <div className="">
            <h1 className="text-[30px] font-medium mb-[20px]">
              Константин Константинопольский
            </h1>
            <div className="flex gap-4 items-center ">
              <img src={Vkontakt} alt="" className="w-[40px] h-[40px]" />
              <img src={Facebook} alt="" className="w-[40px] h-[40px]" />
              <img src={Instagram} alt="" className="w-[40px] h-[40px]" />
              <img src={Twitter} alt="" className="w-[40px] h-[40px]" />
              <img src={Ok} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="mt-[50px] flex gap-4">
              <button className="px-4 py-2 border border-[#D5D1E1] rounded-full text-[14px] font-semibold">
                Изменить персональную информацию
              </button>
              <button className="px-4 py-2 border border-[#D5D1E1] rounded-full text-[14px] font-semibold">
                Изменить пароль
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-[100px] mt-[100px] ml-[25%] pb-[150px]">
          <div className="">
            <div className="flex gap-2">
              <p className="text-[16px] font-medium">+7 911 564–86–86</p>
              <img src={Pen} alt="" />
            </div>
            <span className="text-[16px] font-medium text-[#7A7687]">
              Телефон
            </span>
          </div>
          <div className="">
            <div className="flex gap-2">
              <p className="text-[16px] font-medium">person@mail.ru</p>
              <img src={Pen} alt="" />
            </div>
            <span className="text-[16px] font-medium text-[#7A7687]">
              Email
            </span>
          </div>
        </div>
        <InformCustomer/>
        <HistoryOrder/>
        <Settings/>
      </div>
    </div>
  );
}

export default Account