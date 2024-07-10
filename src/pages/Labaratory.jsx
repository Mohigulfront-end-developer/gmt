import { Link, NavLink } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import LabaratoriyaProduct from "../components/labaratoriya/LabaratoriyaProduct";
import { RiArrowRightSLine } from "react-icons/ri";
import { Slider } from "antd";


const onChange = (value) => {
  console.log("onChange: ", value);
};
const onChangeComplete = (value) => {
  console.log("onChangeComplete: ", value);
};

const Labaratory = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/katalog"} className="text-[#7A7687]">
            Каталог
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/katalog/laboratornoe"} className="">
            Лабораторное оборудование
          </NavLink>
        </div>
        <div className="flex gap-4">
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-white">
            Дерматологическое оборудование
          </button>
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-white">
            Ветеринарное оборудование
          </button>
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-white">
            Мебель медицинская
          </button>
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-white">
            Ветеринарное оборудование
          </button>
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-[#F8F7F3] text-[#088269] ">
            Показать больше
          </button>
        </div>
        <div className="my-10">
          <div className="flex justify-between gap-4">
            <div className="w-[25%] h-[50%]">
              <div className="flex justify-between items-center text-[16px] text-[#202020] border-[1px] border-[#E5E2EE] py-[10px] rounded-xl px-4">
                Направления
                <GoChevronDown />
              </div>
              <div className="border rounded-xl mt-[20px] px-4">
                <h3 className=" text-[16px] flex justify-between items-center py-2  border-b-[1px] border-[#E5E2EE]">
                  Фильтр по товарам <GoChevronUp />
                </h3>
                <p className="text-[16px] flex justify-between items-center py-2">
                  Цена <GoChevronUp />
                </p>
                <div className="">
                  <div className="flex gap-5 items-center">
                    <div className="border-b-[1px] w-[50%] pb-3">
                      <p className="text-[#7A7687] text-[14px] font-medium">
                        От:
                      </p>
                      <p className="text-[14px] font-medium">20.000</p>
                    </div>
                    <div className="border-b-[1px] w-[50%] pb-3">
                      <p className="text-[#7A7687] text-[14px] font-medium">
                        До:
                      </p>
                      <p className="text-[14px] font-medium">950.000</p>
                    </div>
                  </div>
                  <Slider
                    defaultValue={30}
                    onChange={onChange}
                    onChangeComplete={onChangeComplete}
                    className=""
                  />
                  <div className=""></div>
                </div>
              </div>
            </div>
            <LabaratoriyaProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labaratory;
