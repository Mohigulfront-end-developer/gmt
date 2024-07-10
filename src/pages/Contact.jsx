import { Link, NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container ">
        <div className="flex items-center gap-2 pt-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/kontakt"} className="">
            Контакты
          </NavLink>
        </div>
        <div className="py-[100px]">
          <h1 className="text-[48px] font-medium">Контакты</h1>
          <div className="flex justify-between items-center gap-5 ">
            <div className="bg-[white] p-[40px] border rounded-lg my-10 w-[50%]">
              <h4 className="text-[30px] font-medium">
                ООО Глобал Медикал Трейд
              </h4>
              <div className="flex  gap-2 py-5">
                <IoLocationOutline className="text-[#7A7687]" />
                <div className="">
                  <span className="text-[#7A7687] text-[16px] font-medium">
                    Юридический адрес:
                  </span>
                  <p className="text-[16px] font-medium">
                    Россия, г. Москва, ул. Докукина, 8, стр. 2
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pb-5">
                <IoLocationOutline className="text-[#7A7687]" />
                <div className="">
                  <span className="text-[#7A7687] text-[16px] font-medium">
                    Фактический адрес:
                  </span>
                  <p className="text-[16px] font-medium">
                    Россия, г. Москва, ул. Докукина, 8, стр. 2
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pb-5">
                <LuClock className="text-[#7A7687]" />
                <div className="">
                  <span className="text-[#7A7687] text-[16px] font-medium">
                    Режим работы:
                  </span>
                  <p className="text-[16px] font-medium">Пн-Пт с 09:00-19:00</p>
                  <p className="text-[16px] font-medium">Сб-Вс - выходной</p>
                </div>
              </div>
              <h4 className="text-[20px] font-medium">
                Звоните. Звонки по России бесплатны:
              </h4>
              <div className="py-5">
                <div className="flex gap-2 ">
                  <BsTelephone className="text-[#7A7687]" />
                  <div className="">
                    <span className="text-[#7A7687] text-[16px] font-medium">
                      Телефоны:
                    </span>
                    <div className="flex gap-3">
                      <p className="text-[16px] font-medium">8-800-000-00-00</p>
                      <p className="text-[16px] font-medium">
                        +7-000-000-00-00
                      </p>
                      <p className="text-[16px] font-medium">
                        +7-495-000-00-00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 flex gap-2">
                  <MdOutlineMail className="text-[#7A7687] w-[20px] h-[20px]" />
                  <div className="">
                    <span className="text-[#7A7687] text-[16px] font-medium">
                      Пишите:{" "}
                    </span>
                    <p className="text-[16px] font-medium">info@mail.ru</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h4 className="text-[20px] font-medium">Реквизиты: </h4>
                  <div className="flex justify-between items-center py-5 gap-10">
                    <div className="">
                      <span className="text-[16px] text-[#7A7687] font-medium">
                        ИНН
                      </span>
                      <p className="text-[16px] font-medium">9717039181</p>
                    </div>
                    <div className="">
                      <span className="text-[16px] text-[#7A7687] font-medium">
                        ОГРН
                      </span>
                      <p className="text-[16px] font-medium">1167746796986</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h4 className="text-[20px] font-medium">Мы в соцсетях</h4>
                  <div className="flex justify-between mt-[30px]">
                    <div className="p-[4px] rounded-md bg-[#088269] text-white">
                      <SlSocialVkontakte className="w-[25px] h-[25px]" />
                    </div>
                    <div className="p-[4px] rounded-md bg-[#088269] text-white">
                      <FaTelegramPlane className="w-[25px] h-[25px]" />
                    </div>
                    <div className="p-[4px] rounded-md bg-[#088269] text-white">
                      <FaWhatsapp className="w-[25px] h-[25px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[white] p-[40px] border rounded-lg my-10 w-[50%]">
              <h4 className="text-[30px] font-medium">
                Бесплатная консультация
              </h4>
              <p className="text-[#7A7687] text-[16px] font-medium py-5 w-[70%]">
                Оставьте свои координаты и наш менеджер перезвонит вам через 10
                минут
              </p>
              <input
                type="text"
                placeholder="Ваше имя"
                className="outline-none bg-transparent px-4 py-2 mb-[25px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
              />
              <input
                type="number"
                placeholder="Ваш телефон"
                className="outline-none bg-transparent px-4 py-2 mb-[25px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
              />
              <input
                type="text"
                placeholder="Ваш email"
                className="outline-none bg-transparent px-4 py-2 mb-[25px] border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
              />

              <input
                type="text"
                placeholder="Ваш вопрос"
                className="outline-none bg-transparent px-4  pb-[100px] mb-[25px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
              />
              <div className="flex items-center justify-between gap-4 mt-[60px] mb-[20px]">
                <button className="bg-[#088269] px-6 py-2 rounded-full text-white">
                  Отправить
                </button>
                <p className="text-[12px]">
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных
                  данных на условиях{" "}
                  <span className="text-[#088269]">
                    Политики конфиденциальности
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg mb-[50px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2059578359613!2d69.223697175525!3d41.217282006530105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6108936e27e3%3A0x860a0f4c630d017f!2sGlobal%20Medical%20Center!5e0!3m2!1sru!2s!4v1719634329575!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
