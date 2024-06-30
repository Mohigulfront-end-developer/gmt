import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const HeaderBottom = () => {
  return (
    <div className="bg-[#F8F7F3] border-b-2 border-[#E5E2EE]">
      <div className="container flex items-center justify-between py-2">
        <ul className="flex items-center justify-between gap-5">
          <NavLink
            to={"/katalog"}
            className="flex items-center gap-2 text-[14px] font-semibold active:text-green-600"
          >
            <HiOutlineMenuAlt1 />
            Каталог
          </NavLink>
          <NavLink
            to={"/proizvoditel"}
            className="flex items-center text-[14px] font-semibold"
          >
            Производители
          </NavLink>
          <NavLink
            to={"/kabinet-podklyuch"}
            className="flex items-center text-[14px] font-semibold"
          >
            Кабинеты под ключ
          </NavLink>
          <NavLink
            to={"/servisi"}
            className="flex items-center text-[14px] font-semibold"
          >
            Услуги
          </NavLink>
          <NavLink
            to={"/aktsiya"}
            className="flex items-center text-[14px] font-semibold"
          >
            Акции
          </NavLink>
          <NavLink
            to={"/pokupatel"}
            className="flex items-center text-[14px] font-semibold"
          >
            Покупателям
          </NavLink>
          <NavLink
            to={"/kontakt"}
             className="flex items-center text-[14px] font-semibold"
          >
            Контакты
          </NavLink>
        </ul>
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2  text-[14px] font-semibold">
            Москва <IoLocationOutline className="" />
          </p>
          <button className="text-[14px] px-4 py-2 bg-transparent border border-[#E5E2EE] rounded-full hover:bg-[#088269] hover:text-white">
            +7(495)000-00-00
          </button>
          <button className="text-[14px] px-4 py-2 bg-transparent border border-[#E5E2EE] rounded-full hover:bg-[#088269] hover:text-white">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
