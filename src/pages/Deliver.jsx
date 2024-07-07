import React from 'react'
import PositiveSide from '../components/delivery/PositiveSide';
import Course from "../components/main/course/Course"
import { Link, NavLink } from 'react-router-dom';
import Document from '../components/delivery/Document';
import Concultation from '../components/delivery/Concultation';
import FastQuestion from '../components/delivery/FastQuestion';

const Dostavka = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <span className="text-[#7A7687]">></span>
          <NavLink to={"/dostavka"} className="">
            Доставка
          </NavLink>
        </div>
        <h1 className="font-medium text-[48px] pt-[80px]">
          Информация о доставке
        </h1>
        <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg my-[30px] ">
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
        <div className="ml-[50%] w-[50%] mt-[40px]">
          <p className="text-[16px] font-medium">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
        </div>
      </div>
      <PositiveSide />
      <div className="container pt-10 pb-[150px] flex justify-between">
        <div className="">
          <h2 className="w-[50%] text-[30px] font-medium pb-[25px]">
            Правила получения товара в пункте выдачи
          </h2>
          <p className="w-[70%] font-medium text-[16px]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов.
          </p>
        </div>
        <div className="">
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Подготовить документы</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте нужные документы
            </p>
          </div>
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Проверка упаковки</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие механических повреждений и нарушений целостности упаковки
            </p>
          </div>
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Проверка товара</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной поставщика и на наличие повреждений товара внутри тары
            </p>
          </div>
        </div>
      </div>
      <FastQuestion/>
      <div className="container py-[150px]">
        <div className="flex justify-between mb-[15px] items-center">
          <h2 className="w-[50%] text-[30px] font-medium">
            Вы сможете забрать оборудование{" "}
            <span className="text-[#088269]">самостоятельно</span> из нашего
            офиса
          </h2>
          <div className="flex justify-between gap-3 w-[50%]">
            <div className="w-full border rounded-lg p-[25px]">
              <h4 className="text-[18px] font-semibold mb-[20px]">Контакты</h4>
              <p className="text-[#7A7687] text-medium text-[16px]">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-medium text-[16px]">
                info@mail.ru
              </p>
            </div>
            <div className="w-full border rounded-lg p-[25px]">
              <h4 className="text-[18px] font-semibold mb-[20px]">Контакты</h4>
              <p className="text-[#7A7687] text-medium text-[16px]">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-medium text-[16px]">
                info@mail.ru
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

      <Document />
      <Concultation />
      <Course />
    </div>
  );
}

export default Dostavka