import { Link, NavLink, useNavigate } from "react-router-dom";
import Data from "../data/cabinet";
import Select from "../components/main/select/Select";
import Order from "../components/cabinet/Order";
import Question from "../components/main/question/Question";
import Course from "../components/main/course/Course";
import FastQuestion from "../components/delivery/FastQuestion";
import { RiArrowRightSLine } from "react-icons/ri";

const CabinetRegister = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[20px]">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/kabinet-podklyuch"} className="">
            Кабинеты под ключ
          </NavLink>
        </div>
        <div className="">
          <h1 className="text-[48px] font-medium pt-[80px]">
            Кабинеты под ключ
          </h1>
          <div className="w-[full] grid grid-cols-2 gap-4 py-10">
            {Data.map((item, index) => (
              <div
                key={index}
                className=" border rounded-lg overflow-hidden h-[380px] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover"
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                />
                <h3
                  className="py-[20px] px-5 bg-white text-[18px] font-medium "
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Select />
      <Order />
      <FastQuestion />
      <Question />
      <Course />
    </div>
  );
};

export default CabinetRegister;
