import { useState } from "react";
import Logo from "../../../public/Logo.svg";
import { FaCaretDown } from "react-icons/fa";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal"; // Make sure to update the path based on your file structure

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email адрес")
      .required("Обязательно для заполнения"),
    password: Yup.string()
      .min(6, "Пароль должен содержать не менее 6 символов")
      .required("Обязательно для заполнения"),
  });

  return (
    <div className="bg-[#F8F7F3] border-b-[1px] border-[#E5E2EE]">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <NavLink to={"/"}>
              <img src={Logo} alt="Logo" />
            </NavLink>

            <div className="lg:flex hidden items-center border border-[#D5D1E1] px-2 rounded-full">
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
            <div className="sm:flex lg:hidden hidden items-center border border-[#D5D1E1] px-2 rounded-full">
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

          <div className="sm:flex hidden items-center gap-4">
            <button
              className="text-[#7A7687] text-[13px] flex flex-col items-center hover:text-[#088269]"
              onClick={handleOpenModal}
            >
              <IoPersonOutline className="text-[black] text-center w-[20px] h-[22px] hover:text-[#088269]" />
              Войти
            </button>
            <Link
              to={"/izbrannoe"}
              className="text-[#7A7687] text-[13px] flex flex-col items-center hover:text-[#088269] "
            >
              <IoIosHeartEmpty className="text-[black] text-center w-[20px] h-[22px] hover:text-[#088269] " />
              Избранное
            </Link>
            <Link
              to={"/sravniti"}
              className="text-[#7A7687] text-[13px] flex flex-col items-center hover:text-[#088269]"
            >
              <RiAlignItemBottomLine className="text-[black] text-center w-[20px] h-[22px] hover:text-[#088269]" />
              Сравнить
            </Link>
            <Link to={"/korzinka"}>
              <button className="text-[#7A7687] text-[13px] flex flex-col items-center hover:text-[#088269]">
                <FiShoppingCart className="text-[black] text-center w-[20px] h-[22px] hover:text-[#088269]" />
                Корзина
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-[18px] font-semibold mb-4">Регистрация</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate("/profil");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <Field
                  className={`border-b-[1px] w-full py-2 px-3 text-[16px] text-[#7A7687] leading-tight outline-none ${
                    errors.email && touched.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Ваш email*"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mb-6">
                <Field
                  className={`border-b-[1px] rounded w-full py-2 px-3 text-[16px] text-[#7A7687] mb-3 leading-tight outline-none ${
                    errors.password && touched.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Пароль*"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="">
                <button
                  className="bg-[#088269] text-[#F8F7F3] font-semibold py-2 px-4 rounded-full w-full"
                  type="submit"
                >
                  Регистрация
                </button>
              </div>
              <div className="flex gap-2 py-4 items-start">
                <Field type="checkbox" name="agreement" className="" />
                <label className="text-[12px] font-medium text-[#7A7687]">
                  Я соглашаюсь c обработкой персональных данных на условиях
                  <span className="text-[#088269] ml-[5px]">
                    Политики конфиденциальности
                  </span>
                  .
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default Navbar;
