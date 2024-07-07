const Consult = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container flex justify-between gap-5 py-[150px]">
        <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2059578359613!2d69.223697175525!3d41.217282006530105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6108936e27e3%3A0x860a0f4c630d017f!2sGlobal%20Medical%20Center!5e0!3m2!1sru!2s!4v1719634329575!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-[white] pt-10 px-10 rounded-lg">
          <h4 className="text-[30px] font-semibold pb-[20px]">
            Вам нужна консультация?
          </h4>
          <p className="w-[80%] text-[#7A7687] text-[16px] font-medium pb-5">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
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
            <p className="text-[12px]">
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

export default Consult;
