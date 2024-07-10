import Slider from "react-slick";
import Img from "../../../../public/assets/hero/Vector.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useRef, useState } from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const previous = () => {
    carouselRef.current.slickPrev();
  };

  const next = () => {
    carouselRef.current.slickNext();
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Обязательно для заполнения"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Некорректный номер телефона")
      .required("Обязательно для заполнения"),
    email: Yup.string()
      .email("Некорректный email")
      .required("Обязательно для заполнения"),
    organization: Yup.string().required("Обязательно для заполнения"),
    message: Yup.string().required("Обязательно для заполнения"),
  });

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#F8F7F3] pt-[30px]">
      <div className="container relative">
        <Slider ref={carouselRef} {...settings}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-[#E5E4ED] border rounded-xl">
              <div className="lg:flex justify-between grid grid-cols-1 rounded-xl">
                <div className="sm:w-[100%] lg:w-[50%] w-full lg:px-[60px] sm:px-[60px] px-[10px] py-[33px]">
                  <h1 className="lg:w-[85%] text-[#202020] lg:text-[48px] sm:text-[48px] text-[35px] font-medium leading-none mb-[25px]">
                    Заголовок баннера в пару строк
                  </h1>
                  <p className="sm:w-[100%] lg:w-[70%]  lg:text-[18px] sm:text-[18px] text-[16px] text-[#7A7687]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <div className="flex items-center gap-5 mt-[65px] sm:w-[100%] lg:w-[70%] w-full">
                    <button
                      onClick={handleOpenModal}
                      className="sm:w-[100%] lg:w-[65%] w-full border lg:text-[14px] sm:text-[14px] text-[12px] font-semibold text-[#F8F7F3] border-[#D5D1E1] bg-[#088269] rounded-full px-4 py-2  hover:bg-[#07745E] "
                    >
                      Запросить цену
                    </button>
                    <Link
                      to={"/katalog"}
                      className="sm:w-[100%] lg:w-[50%] w-full border text-center lg:text-[14px] sm:text-[14px] text-[12px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-6 hover:bg-[#07745E] hover:text-[#F8F7F3] "
                    >
                      В каталог
                    </Link>
                  </div>
                </div>
                <div className="relative lg:w-[50%] flex items-center justify-center">
                  <img
                    src={Img}
                    alt=""
                    className="w-full h-full object-cover object-left rounded-r-lg"
                  />
                  <div className="lg:flex  hidden gap-2 absolute bottom-4 right-4">
                    <button
                      className="border rounded-full bg-white p-2"
                      onClick={previous}
                    >
                      <GoArrowLeft className="hover:text-green-600 w-[20px] h-[20px]" />
                    </button>
                    <button
                      className="border rounded-full bg-white p-2"
                      onClick={next}
                    >
                      <GoArrowRight className="hover:text-green-600 w-[20px] h-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <br />
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-medium mb-6">Запросить цену</h2>
        <Formik
          initialValues={{
            username: "",
            phone: "",
            email: "",
            organization: "",
            message: "",
          }}
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
              <div className="mb-10">
                <div className="flex justify-between gap-2">
                  <div>
                    <Field
                      className="py-2 px-3 text-gray-700 leading-tight border-b-[1px] outline-none"
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Ваше имя*"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <Field
                      id="phone"
                      type="number"
                      name="phone"
                      placeholder="Ваш телефон*"
                      className="py-2 px-3 text-gray-700 leading-tight border-b-[1px] outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <Field
                    className="w-full py-2 px-3 border-b-[1px] text-gray-700 leading-tight outline-none"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-2">
                  <Field
                    className="w-full py-3 px-3 border-b-[1px] text-gray-700 leading-tight outline-none"
                    id="organization"
                    type="text"
                    name="organization"
                    placeholder="Название вашей организации"
                  />
                  <ErrorMessage
                    name="organization"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="">
                  <Field
                    className="w-full pb-[70px] pt-[10px] px-3 border-b-[1px] text-gray-700 leading-tight outline-none"
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Ваше сообщение"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <button
                  className="bg-[#088269] text-[#F8F7F3] font-semibold py-2 px-4 rounded-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Отправить
                </button>
                <span className="text-[12px] text-[#7A7687]">
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных
                  данных на условиях{" "}
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
}
