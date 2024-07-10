import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { GoArrowUpRight } from "react-icons/go";



const text = (
  <>
    <p className="bg-[#088269] py-4 text-white text-[16px] font-medium">
      Но синтетическое тестирование, в своём классическом представлении,
      допускает внедрение поэтапного и последовательного развития общества. В
      рамках спецификации современных стандартов, сторонники тоталитаризма в
      науке будут функционально разнесены.
    </p>
    <button className="flex gap-2 items-center text-white font-medium text-[16px] py-2 mt-[15px]">Подробнее<GoArrowUpRight className="w-[20px] h-[20px]"/></button>
  </>
);

const items = [
  {
    key: "1",
    label: (
      <span className="text-white text-[18px] font-medium ml-[-12px]">
        О компании
      </span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className="text-white text-[18px] font-medium ml-[-12px]">
        Преимущества сотрудников
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className="text-white text-[18px] font-medium ml-[-12px]">
        Достижения компании
      </span>
    ),
    children: text,
  },
  {
    key: "4",
    label: (
      <span className="text-white text-[18px] font-medium ml-[-12px]">
        Карьерный рост
      </span>
    ),
    children: text,
  },
];

const Infom = () => {
  return (
    <div className="bg-[#088269]">
      <div className="container flex justify-between py-[100px] flex-wrap ">
        <div>
          <h2 className="text-white sm:text-[30px] font-medium sm:mb-[30px] text-[25px] ">
            Информация о компании
          </h2>
        </div>
        <Collapse
          accordion
          items={items}
          bordered={false}
          expandIcon={({ isActive }) => (
            <div className=" absolute right-4 top-2 border rounded-full border-white p-2 active:bg-white  ">
              <PlusOutlined
                rotate={isActive ? 45 : 0}
                className="text-white text-[20px] w-[15px] h-[15px] active:text-black "
              />
            </div>
          )}
          className="bg-[#088269] lg:w-[50%] sm:w-[50%] border-none h-full text-white w-[100%] "
        />
      </div>
    </div>
  );
};

export default Infom;
