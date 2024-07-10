import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import HeaderBottom from "./HeaderBottom";
import HeaderBottomTel from "./HeaderBottomTel";

const Header = () => {
  return (
    <div className="fixed w-[100%] z-50">
      <HeaderTop />
      <Navbar />
      <HeaderBottom />
      <HeaderBottomTel />
    </div>
  );
};

export default Header;
