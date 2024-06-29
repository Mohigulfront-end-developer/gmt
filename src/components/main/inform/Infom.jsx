import { Collapse } from "antd";

const text = (
  <p className="bg-[#088269] py-4 text-white text-[16px] font-medium">
    Но синтетическое тестирование, в своём классическом представлении, допускает
    внедрение поэтапного и последовательного развития общества. В рамках
    спецификации современных стандартов, сторонники тоталитаризма в науке будут
    функционально разнесены.
  </p>
);

const items = [
  {
    key: "1",
    label: (
      <span className="text-white text-[18px] font-medium">О компании</span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className="text-white text-[18px] font-medium">
        Преимущества сотрудников
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className="text-white text-[18px] font-medium">
        Достижения компании
      </span>
    ),
    children: text,
  },
  {
    key: "4",
    label: (
      <span className="text-white text-[18px] font-medium">Карьерный рост</span>
    ),
    children: text,
  },
];

const Infom = () => {
  return (
    <div className="bg-[#088269]">
      <div className="container flex justify-between py-[100px]">
        <div>
          <h2 className="text-white text-[30px] font-medium">
            Информация о компании
          </h2>
        </div>
        <Collapse
          accordion
          items={items}
          bordered={false}
          className="bg-[#088269] w-[50%] border-none h-full text-white"
        />
      </div>
    </div>
  );
};

export default Infom;
