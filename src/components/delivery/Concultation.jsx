const Concultation = () => {
  return (
    <div>
      <div className="container lg:flex justify-between py-[150px] grid grid-cols-1">
        <div className="">
          <h2 className="text-[30px] font-medium">Вам нужна консультация?</h2>
          <p className="font-medium text-[16px] mt-[25px] lg:w-[80%] w-full">
            Задайте их по номеру телефона{" "}
            <span className="text-[#088269]">+7 (495) 000-00-00</span>
             или оставьте свои координаты и наш менеджер перезвонит вам через 10
            минут
          </p>
        </div>

        <div className="bg-[white] py-10 px-10 rounded-lg">
          <input
            type="text"
            placeholder="Ваше имя"
            className="outline-none bg-transparent px-4 py-2 mb-[10px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
          />
          <input
            type="number"
            placeholder="Ваш телефон"
            className="outline-none bg-transparent px-4 py-2 mb-[10px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
          />
          <input
            type="text"
            placeholder="Ваш email"
            className="outline-none bg-transparent px-4 py-2 mb-[10px] border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
          />

          <input
            type="text"
            placeholder="Ваш вопрос"
            className="outline-none bg-transparent px-4  pb-[100px] mb-[10px]  border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal"
          />
          <div className="flex items-center justify-between gap-4 mt-10">
            <button className="bg-[#088269] px-6 py-2 rounded-full text-white">
              Отправить
            </button>
            <p className="text-[12px] text-[#7A7687]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269]">
                Политики конфиденциальности
              </span>
              .
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Concultation;
