import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import MapPostroitMashrut from "../components/Map/MapPostroitMashrut";
import Course from "../components/main/course/Course"


const text = (
  <>
    <div className=" py-2">
      <h4 className="text-[16px] text-[#7A7687] opacity-80 font-medium py-2">
        Обязанности:
      </h4>
      <ol className="list-disc mb-[20px] px-6">
        <li className="text-[16px] font-medium opacity-80">
          Работа с входящими/исходящими звонками
        </li>
        <li className="text-[16px] font-medium opacity-80">
          Работа с договорами составление/заключение
        </li>
        <li className="text-[16px] font-medium opacity-80">
          Ведение деловой переписки (эл. почта, переписка в мессенджерах)
        </li>
        <li className="text-[16px] font-medium opacity-80">
          Выполнение плановых показателей
        </li>
      </ol>
      <h4 className="text-[16px] text-[#7A7687] opacity-80 font-medium py-2">
        Требования:
      </h4>
      <ol className="list-disc mb-[20px] px-6">
        <li className="text-[16px] font-medium opacity-80">
          Опыт работы телефонных продаж
        </li>
        <li className="text-[16px] font-medium opacity-80">
          Опыт работы в CRM
        </li>
        <li className="text-[16px] font-medium opacity-80">
          Способность восприятия большого объема информации
        </li>
      </ol>
      <h4 className="text-[16px] text-[#7A7687] opacity-80 font-medium py-2">
        График работы:
      </h4>
      <ol className="list-disc px-6">
        <li className="text-[16px] font-medium opacity-80">
          Оформление с первого рабочего дня
        </li>
        <li className="text-[16px] font-medium opacity-80">00:00 - 23:59</li>
      </ol>
    </div>
    <button className=" text-[#F8F7F3] font-semibold text-[14px] py-2 px-4 mt-[15px] rounded-full bg-[#088269]">
      Отправить резюме
     
    </button>
  </>
);

const items = [
  {
    key: "1",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Менеджер по продажам
      </span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">
        Специалист по медицинскому оборудованию
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">Офис менеджер</span>
    ),
    children: text,
  },
  {
    key: "4",
    label: (
      <span className=" text-[18px] font-semibold ml-[-12px]">HR–менеджер</span>
    ),
    children: text,
  },
];

const JobAplication = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/vakansi"} className="">
            Вакансии
          </NavLink>
        </div>
        <div className="flex justify-between pb-[100px]  ">
          <div className="w-[40%]">
            <h2 className=" text-[48px] font-medium sm:mb-[30px] mb-[20px]">
              Вакансии
            </h2>
            <p className="text-[16px] font-medium">
              В «Глобал Медикал Трейд» всегда есть место как для новичков,
              так и для состоявшихся экспертов. Тем, кто только начинает строить
              карьеру, мы предлагаем возможность получить ценные знания,
              а опытным специалистам — расширить компетенции.
            </p>
          </div>
          <div className="w-[50%]">
            <h2 className="text-[30px] font-medium border-b-[1px] border-[#E1DFE7] py-7">
              Актуальные вакансии
            </h2>
            <Collapse
              accordion
              items={items}
              bordered={false}
              expandIcon={({ isActive }) => (
                <div className=" absolute right-4 top-2 border border-[#E1DFE7] rounded-full  p-2 active:bg-[#088269]  ">
                  <PlusOutlined
                    rotate={isActive ? 45 : 0}
                    className=" text-[20px] w-[15px] h-[15px] active:text-white "
                  />
                </div>
              )}
              className="bg-transparent w-full border-none h-full "
            />
          </div>
        </div>
        <MapPostroitMashrut />
      </div>

      <Course />
    </div>
  );
};

export default JobAplication;
