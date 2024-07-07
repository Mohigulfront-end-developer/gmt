import Logo from "../../../public/Logo.svg";
import { FaCaretDown } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// import {  useSelector } from "react-redux";


const Navbar = () => {
  //  const dispatch = useDispatch();

  //  const [isInputVisible, setIsInputVisible] = useState(false);
  //  const { card } = useSelector((card) => card.card);
  //  console.log(card, "cartpage for");

  //  const toggleInputVisibility = () => {
  //    setIsInputVisible(!isInputVisible);
  //  };
  return (
    <div className="bg-[#F8F7F3] border-b-2 border-[#E5E2EE]">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>

            <div className="flex items-center border border-[#D5D1E1]  px-2 rounded-full">
              <button className="flex font-bold items-center gap-2 text-[14px] text-[#7A7687] rounded-full bg-[#EFEFEF] p-2 relative right-[8px]">
                Все категории <FaCaretDown className="text-[#7A7687]" />
              </button>
              <input
                type="text"
                placeholder="Поиск"
                className="bg-[#F8F7F3] px-4 w-[400px] outline-none "
              />
              <button className="h-[38px] w-[50px] flex items-center gap-2 text-[15px] text-[#7A7687] rounded-r-full bg-[#D5D1E1] left-2 relative ">
                <IoSearch className="text-[#7A7687] ml-5" />
              </button>
            </div>
            <div className="">
              <p className="text-[13px] text-[#7A7687]">Пн-Пт с 09:00-19:00 </p>
              <p className="text-[13px] text-[#7A7687]">Сб-Вс - выходной</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-[#7A7687] text-[13px] flex flex-col items-center">
              <IoPersonOutline className="text-[black] text-center w-[20px] h-[22px]" />
              Войти
            </button>
            <button className="text-[#7A7687] text-[13px] flex flex-col items-center ">
              <IoIosHeartEmpty className="text-[black] text-center w-[20px] h-[22px]" />
              Избранное
            </button>
            <button className="text-[#7A7687] text-[13px] flex flex-col items-center">
              <RiAlignItemBottomLine className="text-[black] text-center w-[20px] h-[22px]" />
              Сравнить
            </button>
            <Link to={"/korzinka"}>
              <button className="text-[#7A7687] text-[13px] flex flex-col items-center">
                <FiShoppingCart className="text-[black] text-center w-[20px] h-[22px]" />
                Корзина
              </button>
              {/* {card.length ? (
                <p className="absolute left-[22px] top-[-10px] rounded-full bg-green-600 px-[5px] text-white">
                  {card.length}
                </p>
              ) : (
                ""
              )} */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
