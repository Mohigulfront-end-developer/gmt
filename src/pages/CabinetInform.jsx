import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img from "../../public/assets/cabinet/cabinet.png"
import Order from '../components/cabinet/Order';
import FastQuestion from '../components/delivery/FastQuestion';
import Consult from "../components/garantii/Consult"
import { RiArrowRightSLine } from "react-icons/ri";

const CabinetInform = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/kabinet-podklyuch"} className="text-[#7A7687]">
            Кабинет под ключ
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/kabinet-podklyuch"} className="text-[#7A7687]">
            Реанимация
          </Link>
          <span className="text-[#7A7687]">></span>
          <NavLink to={"/kabinet-podklyuch/:id"} className="">
            Палата реанимации и интенсивной терапии
          </NavLink>
        </div>
        <div className="py-10">
          <h1 className="w-[70%] text-[48px] font-medium py-5">
            Комплексное оснащение палаты реанимации и интенсивной терапии
          </h1>
          <img src={Img} alt="" />
          <div className=" flex justify-end pb-[15px]">
            <p className="w-[50%] mt-[30px] text-[16px] font-medium  ">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
          </div>
          <div className="flex justify-end">
            <span className="w-[50%] text-[#07745E] text-[14px] font-medium">
              Скачать каталог "Стандарты оснащения отделений"
            </span>
          </div>
        </div>
      </div>
      <Order />
      <FastQuestion />
      <Consult />
    </div>
  );
}

export default CabinetInform