import img1 from "../../../../public/assets/category/category1.png";
import img2 from "../../../../public/assets/category/category2.png";
import img3 from "../../../../public/assets/category/category3.png";
import img4 from "../../../../public/assets/category/category4.png";
import img5 from "../../../../public/assets/category/category5.png";
import img6 from "../../../../public/assets/category/category6.png";
import img7 from "../../../../public/assets/category/category7.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="px-4 md:px-16 py-5 gap-12 bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-[#202020] text-3xl font-medium leading-[120%] my-10">
            Популярные категории
          </h2>
          <Link to="/">
            <Link
              to={"/katalog"}
              className="transition duration-300 lg:flex sm:flex hidden justify-center items-center px-[20px] py-[11px] rounded-full font-manrope font-semibold text-sm text-white bg-[#088269] border-none"
            >
              Все категории
            </Link>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img1}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] p-4">
                  Дерматологическое оборудование
                </p>
              </div>
            </Link>
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img2}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] p-4">
                  Ветеринарное оборудование
                </p>
              </div>
            </Link>
          </div>
          <Link to={"/katalog"}>
            <div className="w-full h-full border border-[#E5E2EE] rounded-lg md:row-span-2 cursor-pointer">
              <img
                src={img3}
                alt="image"
                className="w-full h-[460px] object-contain rounded-t-xl bg-white p-5"
              />
              <p className="lg:text-[16px] sm:text-[14px] text-[12px] p-4">
                Дерматологическое оборудование
              </p>
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img4}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] p-4">
                  Оборудование для анастезиологии
                </p>
              </div>
            </Link>
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img5}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] p-4">
                  Мебель для медицинских целей
                </p>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img6}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] font-normal p-4">
                  Оборудование для анастезиологии
                </p>
              </div>
            </Link>
            <Link to={"/katalog"}>
              <div className="w-full h-full border border-[#E5E2EE] rounded-lg cursor-pointer">
                <img
                  src={img7}
                  alt="image"
                  className="w-full h-[200px] object-contain rounded-t-xl bg-white p-5"
                />
                <p className="lg:text-[16px] sm:text-[14px] text-[12px] font-normal p-4">
                  Дерматологическое оборудование
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/">
          <Link
            to={"/katalog"}
            className="transition duration-300 lg:hidden sm:hidden flex w-[50%] mt-[20px] mx-auto justify-center items-center px-[20px] py-[11px] rounded-full font-manrope font-semibold text-sm text-white bg-[#088269] border-none"
          >
            Все категории
          </Link>
        </Link>
      </div>
    </section>
  );
};

export default Category;
