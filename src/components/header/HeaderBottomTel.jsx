import { Link } from "react-router-dom"
import Icon1 from "../../../public/assets/headerphone/home.svg"
import Icon2 from "../../../public/assets/headerphone/catalog.svg"
import Icon3 from "../../../public/assets/headerphone/basket.svg"
import Icon4 from "../../../public/assets/headerphone/favourites.svg"
import Icon5 from "../../../public/assets/headerphone/login.svg"


const HeaderBottomTel = () => {
  return (
    <div>
        <div className="">
            <div className="fixed flex items-center gap-8 sm:hidden lg:hidden w-full bottom-0 z-30 h-[64px] bg-[#F8F7F3] border border-[#E5E2EE] py-[10px] px-4">
              <Link to={"/"} className="flex flex-col items-center">
              <img src={Icon1} alt="" />
              <span className="text-[#7A7687] text-[12px] font-medium hover:text-[#088269]">Главная</span>
              </Link>
              <Link to={"/katalog"} className="flex flex-col items-center">
              <img src={Icon2} alt="" />
              <span className="text-[#7A7687] text-[12px] font-medium hover:text-[#088269]">Каталог</span>
              </Link>
                <Link to={"/korzinka"} className="flex flex-col items-center">
              <img src={Icon3} alt="" />
              <span className="text-[#7A7687] text-[12px] font-medium hover:text-[#088269]">Корзина</span>
              </Link>
                <Link to={"/izbrannoe"} className="flex flex-col items-center">
              <img src={Icon4} alt="" />
              <span className="text-[#7A7687] text-[12px] font-medium hover:text-[#088269]">Избранное</span>
              </Link>
                <Link to={"/profil"} className="flex flex-col items-center">
              <img src={Icon5} alt="" />
              <span className="text-[#7A7687] text-[12px] font-medium hover:text-[#088269]">Войти</span>
              </Link>
              
                
            </div>
        </div>
    </div>
  )
}

export default HeaderBottomTel