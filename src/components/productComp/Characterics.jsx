import React, { useState } from "react";

const Product = () => {
  const [chaneBtn, setChaneBtn] = useState("0");
  console.log(chaneBtn);
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[20px]">
        <div className="rounded-xl border ">
          <div className="px-[25px] py-[10px]">
            <div className="flex justify-between">
              <button onClick={() => setChaneBtn("0")}>
                Описание оборудования
              </button>
              <button onClick={() => setChaneBtn("1")}>
                Характеристики и документы
              </button>
              <button>Описание оборудования</button>
              <button>Описание оборудования</button>
            </div>
          </div>
          {chaneBtn == "0" && (
            <>
              <div className="">
                <h3>salom0</h3>
              </div>
            </>
          )}
          {chaneBtn == "1" && "salom1"}
          {chaneBtn == "2" && "salom2"}
          <div className="">
            <div className=" bg-white px-[25px] border-t-[1px] pb-[20px] border-b-[1px]">
              <h3 className="text-[18px] font-medium py-4">
                Технические характеристики
              </h3>
              <div className="flex justify-between">
                <ul>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Вес оборудования . . . . . . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">90 кг</span>
                  </li>
                  <li className="">
                    <span className="text-[14px] text-[#7A7687]">
                      Детектор . . . . . . . . . . . . . . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">
                      CsI - на основе аморфного кремния
                    </span>
                  </li>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Время сканирования . . . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">
                      PAN стандарт - 12 сек
                    </span>
                  </li>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Размер фокусного пятна . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">0.6</span>
                  </li>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Динамический диапазон . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">
                      16 бит (65 536 градации серого)
                    </span>
                  </li>
                </ul>
                <ul>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Рабочее напряжение . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">90 кг</span>
                  </li>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Максимальный ток . . . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">
                      CsI - на основе аморфного кремния
                    </span>
                  </li>
                  <li className=" ">
                    <span className="text-[14px] text-[#7A7687]">
                      Гарантия . . . . . . . . . . . . . . . . . . . . .
                    </span>
                    <span className="text-[14px] font-normal">
                      PAN стандарт - 12 сек
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-[14px] font-medium text-[#07745E] flex gap-[40px] py-[10px] px-[25px]">
            <p>Новинки</p>
            <p>Получить прайс</p>
            <p>Условия доставки</p>
            <p>Способы оплаты</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
