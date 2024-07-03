import Brend from '../components/main/brend/Brand'
import Cabinet from '../components/main/complex/Cabinet';
import Select from '../components/main/select/Select';
import Catalog from "../components/main/catalog/Catalog";
import Question from '../components/main/question/Question';
import Course from '../components/main/course/Course';
import Infom from '../components/main/inform/Infom';
import News from '../components/main/news/News';
import { Link, NavLink } from 'react-router-dom';
import Data from "../data/catalog"
import { GoChevronRight } from "react-icons/go";


const CatalogPage = () => {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        <div className="container ">
          <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
            <Link to={"/"} className="text-[#7A7687]">
              Главная
            </Link>
            <span className="text-[#7A7687]">></span>
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
                    <h4 className="flex justify-between text-[16px]  text-[#202020]">
                      {data.category} <GoChevronRight />
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[72%]  grid grid-cols-4 gap-4">
              {Data.map((data, index) => (
                <div key={index} className="h-[330px] border rounded-lg">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="w-[100%] h-[230px] p-10 bg-white"
                  />
                  <div className="p-4">
                    <h4 className="text-[16px]  text-[#202020]">
                      {data.title1}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Cabinet />
      <Select />
      <Catalog />
      <Brend />
      <News />
      <Infom />
      <Question />
      <Course />
    </>
  );
}

export default CatalogPage