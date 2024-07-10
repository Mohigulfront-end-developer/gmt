import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import Modal from "./OrderModal";
import { useState } from "react";
import Account from "../../../public/assets/signin/account.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const HeaderBottom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^[0-9]{10}$/, "Некорректный номер телефона")
      .required("Обязательно для заполнения"),
    message: Yup.string()
      .required("Обязательно для заполнения")
      .min(10, "Сообщение должно содержать не менее 10 символов"),
  });

  return (
    <div className="bg-[#F8F7F3] border-b-[1px] border-[#E5E2EE]">
      <div className="container sm:flex hidden items-center justify-between py-2">
        <ul className="flex items-center justify-between gap-5">
          <NavLink
            to={"/katalog"}
            className="flex items-center gap-2 text-[14px] font-semibold hover:text-[#07745E]"
          >
            <HiOutlineMenuAlt1 className="hover:text-[#07745E]"/>
            Каталог
          </NavLink>
          <NavLink
            to={"/proizvoditel"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Производители
          </NavLink>
          <NavLink
            to={"/kabinet-podklyuch"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Кабинеты под ключ
          </NavLink>
          <NavLink
            to={"/uslugi"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Услуги
          </NavLink>
          <NavLink
            to={"/aktsiya"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Акции
          </NavLink>
          <NavLink
            to={"/pokupatel"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Покупателям
          </NavLink>
          <NavLink
            to={"/kontakt"}
            className="flex items-center text-[14px] font-semibold hover:text-[#07745E]"
          >
            Контакты
          </NavLink>
        </ul>
        <div className="lg:flex hidden items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-[14px] font-semibold">
            Москва <IoLocationOutline className="" />
          </p>
          <button className="text-[14px] px-4 py-2 bg-transparent border border-[#E5E2EE] rounded-full hover:border-[#07745E] ">
            +7(495)000-00-00
          </button>
          <button
            onClick={handleOpenModal}
            className="text-[14px] px-4 py-2  border border-[#E5E2EE] text-[#F8F7F3] rounded-full bg-[#088269] hover:bg-[#07745E] hover:text-[#F8F7F3]"
          >
            Заказать звонок
          </button>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Заказать звонок</h2>
        <div className="flex items-center gap-4 mb-[20px]">
          <img src={Account} alt="" />
          <div className="">
            <h3 className="text-[18px] font-medium">Олег Сергеевич</h3>
            <p className="text-[14px] text-[#7A7687] font-medium">Менеджер по продажам</p>
          </div>
        </div>
        <Formik
          initialValues={{ number: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
              handleCloseModal();
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field
                  className="w-full py-2 px-3 text-gray-700 leading-tight border-b-[1px] outline-none"
                  id="number"
                  type="text"
                  name="number"
                  placeholder="Ваш телефон"
                />
                <ErrorMessage name="number" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-6">
                <Field
                  className="w-full pt-2 pb-[80px] px-3 text-gray-700 mb-3 leading-tight border-b-[1px] outline-none"
                  id="message"
                  name="message"
                  component="textarea"
                  placeholder="Ваше сообщение"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex gap-5 items-center">
                <button
                  className="py-[5px] px-4 rounded-full w-full h-[40px] font-semibold text-sm text-[#F8F7F3] bg-[#088269]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Оставить заявку
                </button>
                <span className="text-[12px] text-[#7A7687] ">
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
                  на условиях{" "}
                  <span className="text-[#088269]">
                    Политики конфиденциальности.
                  </span>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default HeaderBottom;
