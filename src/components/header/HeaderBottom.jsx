import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import Modal from "./OrderModal"
import { useState } from "react";

const HeaderBottom = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };
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
          <button
            onClick={handleOpenModal}
            className="text-[14px] px-4 py-2 bg-transparent border border-[#E5E2EE] rounded-full hover:bg-[#088269] hover:text-white"
          >
            Заказать звонок
          </button>
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

export default HeaderBottom;
