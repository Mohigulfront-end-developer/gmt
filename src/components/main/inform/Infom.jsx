import React from 'react'
import { Collapse } from "antd";


const text = (
  <p
    
    className="bg-[#088269] py-4 text-white text-[16px] font-medium"
  >
    Но синтетическое тестирование, в своём классическом представлении, допускает
    внедрение поэтапного и последовательного развития общества. В рамках
    спецификации современных стандартов, сторонники тоталитаризма в науке будут
    функционально разнесены.
  </p>
);
const items = [
  {
    key: "1",
    label: "О компании",
    children: text,
  },
  {
    key: "2",
    label: "Преимущества сотрудников",
    children: text,
  },
  {
    key: "3",
    label: "Достижения компании",
    children: text,
  },
  {
    key: "4",
    label: "Карьерный рост",
    children: text,
  },
];
const Infom = () => {
  return (
    <div className="bg-[#088269]">
      <div className="container flex justify-between py-[100px]">
        <div className="">
          <h2 className='text-white text-[30px] font-medium'>Информация о компании</h2>
        </div>
        <Collapse accordion items={items} bordered={false} className="bg-[#088269] w-[50%] border-none h-full text-white" />
      </div>
    </div>
  );
}

export default Infom