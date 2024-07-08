import { useSelector } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Burger from "../../public/assets/signin/burger.svg"
import Table from "../../public/assets/signin/table.svg"



const Compare = () => {
    const { cards } = useSelector((state) => state.cartProducts);
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
         <div className="flex items-center gap-2 pb-[80px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/katalog"} className="text-[#7A7687]">
           Медицинское оборудование
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/sravniti"} className="">
           Сравнение
          </NavLink>
        </div>
         <h1 className="text-[48px] font-medium mb-[20px]">Сравнение товаров</h1>
       <div className="flex justify-between gap-2">
        <div className="">
          <p className="text-[16px] font-medium mb-2">Анализаторы мочи (3)</p>
          <p className="text-[16px] font-medium mb-2 opacity-50">Маммографы</p>
          <p className="text-[16px] font-medium opacity-50">Флюорографы</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
           {cards.map((card) => (
          <div key={card.id} className="border rounded-xl w-[320px] pb-5 ">
            <div className="w-[320px] h-[320px] rounded-xl p-14 bg-white">
              <img src={card.image} alt={card.title} className="w-full h-full rounded-xl object-contain"/>
            </div>
            <div className="px-4 py-2">
              <h3 className="text-[18px] font-semibold w-[200px]">{card.title}</h3>
              <p className="text-[#7A7687] text-[14px] mt-[10px]">{card.desc}</p>
              <p className="text-[#7A7687] text-[14px] ">{card.position}</p>
            </div>
            <div className="px-4 py-2 my-[30px]">
              <p className="text-[18px] font-semibold">{card.price}</p>
            </div>
            <div className="px-4">
              <button className="w-full bg-transparent border rounded-full text-[14px] font-semibold py-2 px-4 text-[#088269]">Добавить в корзину</button>
            </div>
           
          </div>
        ))}
        </div>
       </div>
      </div>
    </div>
  );
}

export default Compare