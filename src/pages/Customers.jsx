import { Link, NavLink } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

const Customers = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/pokupatel"} className="">
            Покупателям
          </NavLink>
        </div>
        <h1 className="text-center font-semibold text-[60px] py-20">
          This page not found
        </h1>
      </div>
    </div>
  );
}

export default Customers