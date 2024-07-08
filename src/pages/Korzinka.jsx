import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Icon1 from "../../public/assets/signin/delete.svg"
import Icon2 from "../../public/assets/signin/comparison.svg"
import Icon3 from "../../public/assets/signin/favourites.svg"



const Korzinka = () => {
  const { cards } = useSelector((state) => state.cartProducts);
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
          <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/korzinka"} className="">
            Корзина
          </NavLink>
        </div>
      <div className="flex justify-between gap-4">
        <div className="w-[80%]">
        {cards.map((card) => (
          <div key={card.id} className=" border rounded-xl mb-[20px] flex justify-between pr-5  ">
            <div className="rounded-xl w-[320px] h-[237px] p-8  bg-white">
              <img src={card.image} alt={card.title} className="rounded-xl w-full h-full object-contain" />
            </div>
            <div className="py-5 ">
              <h3 className="text-[18px] font-semibold w-[200px]">{card.title}</h3>
              <p className="text-[#7A7687] text-[14px] mt-[10px]">{card.desc}</p>
              <p className="text-[#7A7687] text-[14px]">{card.position}</p>
            </div>
            <div className="py-5">
              <p className="text-[18px] font-semibold ">{card.price}</p>
              <div className="flex gap-4 border rounded-full p-2 items-center mt-[28px]">
                <button className="text-[18px] px-2">-</button>
                <p className="text-[18px] text-[#088269]">1</p>
                <button className="text-[18px] px-2">+</button>
              </div>
            </div>
            <div className="flex gap-4 py-5">
              <img src={Icon2} alt="" className="w-[25px] h-[25px] object-cover"/>
              <img src={Icon3} alt="" className="w-[25px] h-[25px] object-cover"/>
              <img src={Icon1} alt="" className="w-[25px] h-[25px] object-cover"/>

            </div>
          </div>
        ))}
      </div>
      <div className="border rounded-xl bg-white p-4 w-[320px] h-[240px]">
        <div className="flex justify-between items-center border-b-[1px] pb-[15px]">
          <p className="text-[14px] font-semibold">Итого</p>
          <p className="text-[14px] font-semibold">900.000 руб.</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-[12px] font-medium">Товары (3 шт)</p>
          <p className="text-[12px] font-medium">900.000 руб.</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[12px] font-medium">Скидка</p>
          <p className="text-[12px] font-medium">0 руб.</p>
        </div>
        <div className="mt-[30px] w-full">
          <button className="px-4 py-2 rounded-full bg-[#088269] text-[#F8F7F3] mb-[10px] w-full text-[14xp] font-semibold">Оформить заказ</button>
          <button className="px-4 py-2 rounded-full border-[#D5D1E1] border w-full text-[14xp] font-semibold">Задать вопрос</button>
        </div>
        
      </div>
      </div>
      </div>
     
    </div>
  );
};

export default Korzinka;
