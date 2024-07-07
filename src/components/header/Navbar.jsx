import  { useState } from "react";
import Logo from "../../../public/Logo.svg";
import { FaCaretDown } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal"; // Make sure to update the path based on your file structure

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F8F7F3] border-b-2 border-[#E5E2EE]">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>

            <div className="flex items-center border border-[#D5D1E1] px-2 rounded-full">
              <button className="flex font-bold items-center gap-2 text-[14px] text-[#7A7687] rounded-full bg-[#EFEFEF] p-2 relative right-[8px]">
                Все категории <FaCaretDown className="text-[#7A7687]" />
              </button>
              <input
                type="text"
                placeholder="Поиск"
                className="bg-[#F8F7F3] px-4 w-[400px] outline-none "
              />
              <button className="h-[38px] w-[50px] flex items-center gap-2 text-[15px] text-[#7A7687] rounded-r-full bg-[#D5D1E1] left-2 relative ">
                <IoSearch className="text-[#7A7687] ml-5" />
              </button>
            </div>
            <div className="">
              <p className="text-[13px] text-[#7A7687]">Пн-Пт с 09:00-19:00 </p>
              <p className="text-[13px] text-[#7A7687]">Сб-Вс - выходной</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="text-[#7A7687] text-[13px] flex flex-col items-center"
              onClick={handleOpenModal}
            >
              <IoPersonOutline className="text-[black] text-center w-[20px] h-[22px]" />
              Войти
            </button>
            <button className="text-[#7A7687] text-[13px] flex flex-col items-center ">
              <IoIosHeartEmpty className="text-[black] text-center w-[20px] h-[22px]" />
              Избранное
            </button>
            <button className="text-[#7A7687] text-[13px] flex flex-col items-center">
              <RiAlignItemBottomLine className="text-[black] text-center w-[20px] h-[22px]" />
              Сравнить
            </button>
            <Link to={"/korzinka"}>
              <button className="text-[#7A7687] text-[13px] flex flex-col items-center">
                <FiShoppingCart className="text-[black] text-center w-[20px] h-[22px]" />
                Корзина
              </button>
              {/* {card.length ? (
                <p className="absolute left-[22px] top-[-10px] rounded-full bg-green-600 px-[5px] text-white">
                  {card.length}
                </p>
              ) : (
                ""
              )} */}
            </Link>
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {/* You can add your login form or content here */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Navbar;
