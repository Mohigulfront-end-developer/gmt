import { IoIosArrowUp } from "react-icons/io";
import Img1 from "../../../public/assets/signin/img2.png";
import Img2 from "../../../public/assets/signin/img1.png";
import { IoIosArrowDown } from "react-icons/io";

const HistoryOrder = () => {
  return (
    <div className="py-[100px]">
      <div className="flex justify-between ">
        <h4 className="text-[18px] font-semibold">История заказов</h4>
        <div className="w-[75%]">
          <div className=" bg-white rounded-xl border-[#E5E2EE] border p-[25px]">
            <div className="flex justify-between items-start border-b-[#E5E2EE] border-b-[1px] pb-[20px]">
              <div className="">
                <h4 className="text-[18px] font-semibold mb-[10px]">
                  Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                  руб.
                </h4>
                <span className="text-[14px] font-medium mr-[8px] text-[#7A7687]">
                  Статус:
                </span>
                <span className="text-[14px] font-medium px-4 py-[5px] bg-[#FFE095] text-[#855E00] rounded-full">
                  В работе
                </span>
              </div>
              <IoIosArrowUp />
            </div>

            <div className="">
              <div className="py-[25px] flex justify-between items-center ">
                <div className="mb-[30px] flex gap-[40px] items-center">
                  <img src={Img1} alt="" />
                  <h4 className="text-[16px] font-medium">
                    Анализатор мочи MIND UA-66
                  </h4>
                </div>
                <div className="flex items-center gap-[79px]">
                  <p className="text-[#7A7687] text-[16px] font-medium">
                    1 шт.
                  </p>
                  <p className="text-[16px]">600 000 руб.</p>
                </div>
              </div>
              <div className="py-[25px] flex justify-between items-center ">
                <div className="mb-[30px] flex gap-[40px] items-center">
                  <img src={Img2} alt="" />
                  <h4 className="text-[16px] font-medium">
                    УЗИ аппарат Chison Qbit5 New Matrix
                  </h4>
                </div>
                <div className="flex items-center gap-[79px]">
                  <p className="text-[#7A7687] text-[16px] font-medium">
                    1 шт.
                  </p>
                  <p className="text-[16px]">300 000 руб.</p>
                </div>
              </div>
              <div className="flex gap-14 justify-end text-[18px] font-semibold">
                <p>Товаров на сумму:</p>
                <p>900 000 руб.</p>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-xl border-[#E5E2EE] border p-[25px] mt-[20px]">
            <div className="flex justify-between items-start ">
              <div className="">
                <h4 className="text-[18px] font-semibold mb-[10px]">
                  Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                  руб.
                </h4>
                <span className="text-[14px] font-medium mr-[8px] text-[#7A7687]">
                  Статус:
                </span>
                <span className="text-[14px] font-medium px-4 py-[5px] bg-[#E1EFE6] text-[#088269] rounded-full">
                  Доставлено
                </span>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryOrder;
