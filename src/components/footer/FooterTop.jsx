import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

const FooterTop = () => {
  return (
    <div className="bg-[#088269]">
      <div className="container flex  justify-between p-5 flex-wrap">
        <div className="w-[210px]">
          <h4 className="border-b-2 border-b-[#F8F7F3] text-[#F8F7F3] text-[14px] py-5">
            Покупателям
          </h4>
          <div className="flex justify-between py-5 gap-5">
            <div className="flex flex-col">
              <NavLink
                to={"/o-kompanii"}
                className="text-[14px]  text-[#F8F7F3]  mb-[10px] hover:text-[#BDDBC7]"
              >
                О компании
              </NavLink>
              <NavLink
                to={"/o-kompanii/certificate"}
                className="text-[14px]  text-[#F8F7F3] mb-[10px] hover:text-[#BDDBC7]"
              >
                Сертификаты
              </NavLink>
              <NavLink
                to={"/vakansi"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Вакансии
              </NavLink>
              <NavLink
                to={"/garantii"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Гарантии
              </NavLink>
              <NavLink
                to={"/uslugi"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Услуги
              </NavLink>
              <NavLink
                to={"/aktsiya"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Акции
              </NavLink>
              <NavLink to={"/dostavka"} className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7]">
                Доставка
              </NavLink>
            </div>
            <div className="flex flex-col">
              <NavLink
                to={"/oplata"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Оплата
              </NavLink>
              <NavLink
                to={"/"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Возврат
              </NavLink>
              <NavLink
                to={"/faq"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                FAQ
              </NavLink>
              <NavLink
                to={"/"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Лизинг
              </NavLink>
              <NavLink
                to={"/otziv"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Отзывы
              </NavLink>
              <NavLink
                to={"/blog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Блог
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-[650px]">
          <h4 className="border-b-2 border-b-[#F8F7F3]  text-[#F8F7F3] text-[14px] py-5">
         Каталог
          </h4>
          <div className="flex justify-between gap-10 py-5 flex-wrap">
            <ul className="flex flex-col">
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Реанимацияи
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Хирургия
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Офтальмология
              </NavLink>
              <NavLink
                to={"/katalog/laboratornoe"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Лабораторная диагностика
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Акушерство и Гинекология
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Гистология
              </NavLink>
              <NavLink to={"/katalog"} className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7]">
                Косметология
              </NavLink>
            </ul>
            <ul className="flex flex-col">
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Орториноларингология
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Рентгенология и томография
              </NavLink>
              <NavLink className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]">
                Стрерилизация
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Физиотерапия и реабилитация
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Функциональная диагностика
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Эндоскопия
              </NavLink>
            </ul>
            <ul className="flex flex-col">
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Новинки
              </NavLink>
              <NavLink
                to={"/aktsiya"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Распродажи
              </NavLink>
              <NavLink
                to={"/kabinet-podklyuch"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Кабинеты под ключ
              </NavLink>
              <NavLink
                to={"/katalog"}
                className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7] mb-[10px]"
              >
                Скачать каталог
              </NavLink>
            </ul>
          </div>
        </div>
        <div className=" text-[#F8F7F3] w-[210px]">
          <h4 className="border-b-2 border-b-[#F8F7F3]  text-[#F8F7F3] text-[14px] py-5">
            Покупателям
          </h4>
          <div className=" py-5">
            <h5 className="text-[14px]  text-[#F8F7F3] ">Адрес:</h5>
            <p className="text-[14px]  text-[#F8F7F3] mb-[25px]">
              г. Москва, ул. Московская, д. 35{" "}
            </p>
            <div className=" flex items-center gap-3 mb-[20px]">
              <span className="text-[14px]  text-[#F8F7F3] hover:text-[#BDDBC7]">
                Карта проезда
              </span>
              <MdArrowOutward />
            </div>
            <p className="text-[14px]  text-[#F8F7F3] ">График работы:</p>
            <p className="text-[14px]  text-[#F8F7F3] mb-[25px]">
              Пн-Пт с 09:00-19:00,
              <br /> Сб-Вс - выходной
            </p>
            <div className="">
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                +7 000-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                +7 495-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                8 800-000-00-00
              </p>
              <p className="text-[14px]  text-[#F8F7F3] mb-[5px]">
                info@mail.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop