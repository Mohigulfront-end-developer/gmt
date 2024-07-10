import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Catalog from "../components/main/catalog/Catalog";
import Consult from "../components/garantii/Consult";

const text = (
  <>
    <div className="flex flex-col space-y-2 text-[#088269] py-4 text-[14px] font-medium">
      <p>
        Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября
        2015 г.
      </p>
      <p>Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.</p>
      <p>Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г</p>
      <p>
        Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
      </p>
      <p>Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года</p>
      <p>Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.</p>
      <p>Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.</p>
      <p>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</p>
      <p>Гигрометры ВИТ Свидетельство об утверждении</p>
      <p>Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.</p>
      <p> Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.</p>
      <p>Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.</p>
      <p>Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020 г.</p>
      <p>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</p>
      <p>Электроды медицинские РУ № ФСЗ 2012/12612</p>
      <p>Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.</p>
      <p>
        Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от 27
        декабря 2011 г.
      </p>
      <p>Термометр медицинский РУ № ФСЗ 2011/10572</p>
      <p>
        Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа 2019 г.
      </p>
      <p>
        Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13 февраля 2018
        г.
      </p>
      <p>
        Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13 января 2017
        г.
      </p>
    </div>
  </>
);

const items = [
  {
    key: "1",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Медицинские инструменты
      </span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Материалы для гинекологии и урологии
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Материалы для инъекционных процедур
      </span>
    ),
    children: text,
  },
  {
    key: "4",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Перевязочные материалы
      </span>
    ),
    children: text,
  },
];

const CertificatePage = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/o-kompanii"} className="text-[#7A7687]">
            О компании
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/o-kompanii/certificate"} className="">
            Сертификаты
          </NavLink>
        </div>
        <div className="flex justify-between pb-[100px] pt-[40px] ">
          <div>
            <h2 className=" text-[48px] font-medium sm:mb-[30px] ">
              Сертификаты
            </h2>
          </div>
          <Collapse
            accordion
            items={items}
            bordered={false}
            expandIcon={({ isActive }) => (
              <div className=" absolute right-4 top-2 border rounded-full border-[#E1DFE7] p-2 active:bg-[#088269]  ">
                <PlusOutlined
                  rotate={isActive ? 45 : 0}
                  className="text-black text-[20px] w-[15px] h-[15px] active:text-[white] "
                />
              </div>
            )}
            className="bg-transparent w-[50%] border-none h-full "
          />
        </div>
      </div>
      <Catalog />
      <Consult />
    </div>
  );
};

export default CertificatePage;
