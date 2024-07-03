import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Sale = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <span className="text-[#7A7687]">></span>
          <NavLink to={"/aktsiya"} className="">
            Акции
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sale