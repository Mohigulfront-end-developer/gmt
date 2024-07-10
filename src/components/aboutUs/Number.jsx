

const Number = () => {
  return (
    <div>
      <div className="container">
        <div className="py-20 sm:flex grid grid-cols-1 justify-between">
          <div className="sm:w-[50%] w-full py-4">
            <h3 className="pt-2 pb-5 text-[30px] font-medium">Цифры и факты</h3>
            <p className="text-[16px] text-[#202020] font-medium w-[80%] opacity-50">
              Мы работаем на результат и продаём только качественную продукцию
            </p>
          </div>
          <div className="sm:w-[50%] w-full">
            <div className="py-4 flex items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium ">
                7 лет
              </span>
              <p className="lg:ml-[200px] sm:ml-[150px] ml-[100px] text-[16px] font-medium">на рынке</p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                964+
              </span>
              <p className="lg:mr-[40px] sm:ml-[150px] ml-[100px] text-[16px] font-medium">
                оригинальной продукции со всего мира
              </p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                23+
              </span>
              <p className="lg:mr-[40px] sm:ml-[170px] ml-[130px] text-[16px] font-medium">
                международных сертификатов качества
              </p>
            </div>
            <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
              <span className="text-[48px] text-[#088269] font-medium">
                2452+
              </span>
              <p className="lg:mr-[150px] sm:ml-[120px] ml-[80px] text-[16px] font-medium">
                товаров всегда в наличии
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number