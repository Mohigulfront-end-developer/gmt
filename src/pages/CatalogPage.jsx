import Brend from "../components/main/brend/Brand";
import Cabinet from "../components/main/complex/Cabinet";
import Select from "../components/main/select/Select";
import Catalog from "../components/main/catalog/Catalog";
import Question from "../components/main/question/Question";
import Course from "../components/main/course/Course";
import News from "../components/main/news/News";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Data from "../data/catalog";
import { GoChevronRight } from "react-icons/go";
import Img1 from "../../public/assets/catalog/img1.png";
import Img2 from "../../public/assets/catalog/img5.png";
import Img3 from "../../public/assets/catalog/img4.png";
import Img4 from "../../public/assets/catalog/img7.png";
import Img5 from "../../public/assets/catalog/img9.png";
import Img6 from "../../public/assets/catalog/img6.png";
import Img7 from "../../public/assets/catalog/img10.png";
import Img8 from "../../public/assets/catalog/img11.png";
import Img9 from "../../public/assets/catalog/img12.png";
import Img10 from "../../public/assets/catalog/img13.png";
import FastQuestion from "../components/delivery/FastQuestion";
import { RiArrowRightSLine } from "react-icons/ri";

const CatalogPage = () => {
   const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#F8F7F3]">
        <div className="container pb-[100px] ">
          <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
            <Link to={"/"} className="text-[#7A7687]">
              Главная
            </Link>
            <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
            <NavLink to={"/katalog"} className="">
              Каталог
            </NavLink>
          </div>
          <div className="flex justify-between">
            <div className="w-[25%] h-[50%] border rounded-lg p-5">
              <h3 className="text-[18px] text-[#202020] border-b-[1px] border-[#E5E2EE] pb-[10px]">
                Направления
              </h3>
              {Data.map((data, index) => (
                <div key={index} className="">
                  <div className="flex flex-col pt-[10px]">
                    <NavLink
                      to={"/katalog/laboratornoe"}
                      className="flex justify-between text-[16px]  text-[#202020]"
                    >
                      {data.category} <GoChevronRight />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[72%]">
              <div className=" mb-[16px] grid grid-cols-3 gap-3">
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img1}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>

                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Ветеринарное оборудование
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img2}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>

                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Анестезиология
                  </h4>
                </div>
                <div className="row-span-2 border rounded-xl cursor-pointer">
                  <div className=" bg-white h-[90%] rounded-t-xl">
                    <img
                      src={Img3}
                      alt=""
                      className="h-full px-20  object-cover rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Хирургические инструменты
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img4}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Физиотерапевтическое оборудование
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img5}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Стоматологическое оборудование
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className=" row-span-2 border rounded-xl cursor-pointer">
                  <div className="p-10 bg-white h-[90%] rounded-t-xl ">
                    <img
                      src={Img6}
                      alt=""
                      className="h-full mx-4  object-cover rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Проктологическое оборудование
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img7}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Оборудование для медицинской метрологии
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img8}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Оборудование для мониторинга пациента
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img9}
                      alt=""
                      className="h-full mx-4 rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Оборудование для радиационной терапии
                  </h4>
                </div>
                <div className="h-[304px] cursor-pointer border rounded-xl">
                  <div className="h-[80%] p-7 bg-white rounded-t-xl">
                    <img
                      src={Img10}
                      alt=""
                      className="h-full rounded-xl"
                      onClick={() => navigate(`/katalog/laboratornoe/`)}
                    />
                  </div>
                  <h4
                    className="text-[16px] font-medium px-4 py-2"
                    onClick={() => navigate(`/katalog/laboratornoe/`)}
                  >
                    Педиатрическое оборудование
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cabinet />
      <Select />
      <Catalog />
      <Brend />
      <News />
      <FastQuestion />
      <Question />
      <Course />
    </>
  );
};

export default CatalogPage;
