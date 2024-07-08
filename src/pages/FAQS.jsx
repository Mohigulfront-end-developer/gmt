import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GoArrowUpRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import faqData from "../data/faq"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Question from "../components/main/question/Question"


const FAQS = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  const totalPages = Math.ceil(faqData.length / itemsPerPage);

  const currentData = faqData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const items = currentData.map((item) => ({
    key: item.key,
    label: (
      <span className="text-[18px] font-semibold ml-[-12px]">{item.title}</span>
    ),
    children: (
      <>
        <p className="bg-transparent py-4 opacity-80 text-[16px] font-medium">
          {item.content}
        </p>
        <button className="flex gap-2 items-center font-semibold text-[14px] py-2 mt-[15px]">
          Подробнее
          <GoArrowUpRight className="w-[20px] h-[20px]" />
        </button>
      </>
    ),
  }));

  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/faq"} className="">
            FAQ
          </NavLink>
        </div>
        <div className="flex justify-between pb-[100px] pt-[40px]">
          <div className="w-[40%]">
            <h2 className="text-[48px] font-medium sm:mb-[30px]">
              Часто задаваемые вопросы
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Поиск по вопросам"
                className="w-full outline-none px-4 py-2 border rounded-full relative mr-[-14px] bg-[#F8F7F3]"
              />
              <button className="bg-[#D5D1E1] px-4 py-2 border rounded-r-full">
                <IoSearch className="w-[23px] h-[23px] text-gray-500" />
              </button>
            </div>
          </div>
          <div className="w-[50%] border-t-[1px] border-[#E1DFE7]">
            <Collapse
              accordion
              items={items}
              bordered={false}
              expandIcon={({ isActive }) => (
                <div className="absolute right-4 top-2 border rounded-full border-[#E1DFE7] p-2 active:bg-[#088269]">
                  <PlusOutlined
                    rotate={isActive ? 45 : 0}
                    className="text-[20px] w-[15px] h-[15px] active:text-white"
                  />
                </div>
              )}
              className="bg-transparent w-full h-full"
            />
            <div className="flex justify-center gap-[5px] mt-5">
              <button
                className={`px-3 py-1 rounded-lg border ${
                  currentPage === 1
                    ? "bg-white text-black"
                    : "bg-white text-black"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <MdOutlineKeyboardDoubleArrowLeft />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-lg border ${
                    currentPage === index + 1
                      ? "bg-[#088269] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={`px-3 py-1 rounded-lg border ${
                  currentPage === totalPages
                    ? "bg-white text-black"
                    : "bg-white text-black"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Question/>
    </div>
  );
};

export default FAQS;
