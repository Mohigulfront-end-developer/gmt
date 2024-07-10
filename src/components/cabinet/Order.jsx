const Order = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[150px]">
        <div className="grid grid-cols-2 rounded-xl p-[40px]  bg-[white]">
          <h2 className="w-[70%] text-[30px] font-medium">
            Закажите у нас комплексное оснащение
          </h2>
          <div className="w-[85%]">
            <input
              type="number"
              className="border-b-[1px] px-4 py-2 mb-[30px] bg-transparent text-[#7A7687] border-b-[#7A7687] w-full outline-none opacity-30"
              placeholder="Ваш телефон"
            />
            <div className="flex justify-between items-center gap-4">
              <button className="rounded-full bg-[#088269] text-[14px] font-medium text-[#F8F7F3] px-6 py-2">
                Заказать
              </button>
              <p className="text-[12px] font-medium text-[#7A7687]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
