import Img from "../../../public/assets/signin/edit.svg";
const InformCustomer = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between ">
        <h4 className="text-[18px] font-semibold">Данные о плательщике</h4>
        <div className="w-[75%] bg-white rounded-xl border-[#E5E2EE] border p-[25px]">
          <div className="flex justify-between items-start">
            <div className="mb-[60px]">
              <h4 className="text-[18px] font-semibold">Название компании</h4>
              <p className="text-[16px] font-medium">ИНН 9717039181</p>
            </div>
            <img src={Img} alt="" />
          </div>

          <div className="flex gap-[200px]">
            <div className="">
              <div className="mb-[30px]">
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Адрес доставки
                </p>
                <p className="text-[16px] font-medium">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
              <div className="mb-[30px]">
                <p className="text-[#7A7687] text-[16px] font-medium">Сайт</p>
                <p className="text-[16px] font-medium">global-mt.ru</p>
              </div>
              <div className="">
                <p className="text-[#7A7687] text-[16px] font-medium">Email</p>
                <p className="text-[16px] font-medium">info@mail.ru</p>
              </div>
            </div>
            <div className="">
              <div className="mb-[30px]">
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Ваша должность
                </p>
                <p className="text-[16px] font-medium">Менеджер по закупкам</p>
              </div>
              <div className="">
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Тип организации
                </p>
                <p className="text-[16px] font-medium">Юридическое лицо</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-[30px] ml-[82%] py-[10px] px-8 bg-[#088269] text-[#F8F7F3] text-[14px] font-semibold rounded-full">
        Добавить плательщика
      </button>
    </div>
  );
};

export default InformCustomer;
