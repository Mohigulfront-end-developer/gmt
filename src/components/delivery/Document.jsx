import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const text = (
  <>
    <p className="bg-[#E5E4ED] opacity-80 text-[16px] font-medium">
      Но синтетическое тестирование, в своём классическом представлении,
      допускает внедрение поэтапного и последовательного развития общества. В
      рамках спецификации современных стандартов, сторонники тоталитаризма в
      науке будут функционально разнесены.
    </p>
  </>
);

const items = [
  {
    key: "1",
    label: (
      <span className="text-[18px] font-medium ml-[-12px]">
        Юридические лица
      </span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className=" text-[18px] font-medium ml-[-12px]">
        Индивидуальные предприниматели
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className=" text-[18px] font-medium ml-[-12px]">
        Физические лица
      </span>
    ),
    children: text,
  },
];

const Document = () => {
  return (
    <div className="bg-[#E5E4ED]">
      <div className="container lg:flex justify-between pt-[100px] pb-[150px] flex-wrap">
        <div className="lg:w-[50%] w-full">
          <h2 className="lg:w-[60%] w-full text-[30px] font-medium">
            Документы, необходимые для получения груза
          </h2>
          <p className="lg:w-[80%] w-full text-[16px] pt-[16px] font-medium ">
            По копиям доверенностей и доверенностям с незаполненными
            обязательными реквизитами отгрузка не производится
          </p>
        </div>
        <Collapse
          accordion
          items={items}
          bordered={false}
          expandIcon={({ isActive }) => (
            <div className=" absolute right-4 top-2 border rounded-full border-[#D5D1E1] p-2 active:bg-[#088269] ">
              <PlusOutlined
                rotate={isActive ? 45 : 0}
                className=" text-[20px] w-[15px] h-[15px] active:text-white "
              />
            </div>
          )}
          className="bg-[#E5E4ED] lg:w-[50%] w-full  border-none h-full "
        />
      </div>
    </div>
  );
};

export default Document;
