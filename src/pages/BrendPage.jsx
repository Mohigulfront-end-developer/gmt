import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Img1 from "../../public/assets/brend/img1.png"
import Img2 from "../../public/assets/brend/img2.png";
import Brend from '../components/main/brend/Brand';
import FastQuestion from '../components/delivery/FastQuestion';
import Question from '../components/main/question/Question';

const BrendPage = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <span className="text-[#7A7687]">></span>
          <Link to={"/proizvoditel"} className="text-[#7A7687]">
            Производители
          </Link>
          <span className="text-[#7A7687]">></span>
          <NavLink to={"/proizvoditel"} className="">
            Медецинское оборудование Draeger
          </NavLink>
        </div>
        <h1 className="text-[48px] font-medium pt-[100px]">
          Медецинское оборудование Draeger
        </h1>
        <div className="flex justify-between items-center gap-2 py-5">
          <div className="w-[50%]">
            <img src={Img1} alt="" className="w-full object-cover" />
          </div>

          <div className="w-[50%]">
            <img src={Img2} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="my-4   grid grid-cols-1 gap-4 w-[50%] ml-[50%]">
          <p className="text-[16px] font-medium ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
          <p className="text-[16px] font-medium ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
        </div>
      </div>
      <Brend/>
      <FastQuestion/>
      <Question/>
    </div>
  );
}

export default BrendPage