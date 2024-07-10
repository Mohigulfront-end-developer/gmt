import Img from "../../../../public/message.svg";

const Course = () => {
  return (
    <div className="bg-[#E5E4ED]">
      <div className="container flex justify-between ">
        <div className="lg:w-[46%] sm:w-[46%] lg:flex sm:flex hidden ">
          <img src={Img} alt="" />
        </div>
        <div className="py-4 lg:w-[46%] sm:w-[46%] w-full">
          <h3 className=" text-[30px] font-semibold mb-[15px]">
            Подпишитесь и будьте в курсе!
          </h3>
          <p className="text-[16px] text-[#7A7687] pb-[35px]">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="flex items-center mt-[20px] ">
            <input
              type="text"
              placeholder="Введите email"
              className="outline-none px-4 py-2 rounded-l-full border-[#E5E4ED] w-[70%] "
            />
            <button className="px-8 py-2 bg-[#088269] text-white rounded-full  relative ml-[-50px] hover:bg-[#07745E] hover:text-[#F8F7F3]">
              Подписаться
            </button>
          </div>
          <div className="mt-[22px] gap-4 flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <label className="">
              Я даю согласие на обработку своих персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
