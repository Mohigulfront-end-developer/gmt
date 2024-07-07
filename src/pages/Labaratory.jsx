import React from "react";
import { Link, NavLink, } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import LabaratoriyaProduct from "../components/labaratoriya/LabaratoriyaProduct";

const Labaratory = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <span className="text-[#7A7687]">></span>
          <Link to={"/katalog"} className="text-[#7A7687]">
            Каталог
          </Link>
          <span className="text-[#7A7687]">></span>
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
              <div className="flex justify-between items-center text-[18px] text-[#202020] border-[1px] border-[#E5E2EE] py-[10px] rounded-xl px-4">
                Направления
                <GoChevronDown />
              </div>
              <div className="border rounded-xl mt-[20px] px-4">
                <h3 className="flex justify-between items-center py-2  border-b-[1px] border-[#E5E2EE]">
                  Фильтр по товарам <GoChevronUp />
                </h3>
                <p className="flex justify-between items-center py-2">
                  Цена <GoChevronUp />
                </p>
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
