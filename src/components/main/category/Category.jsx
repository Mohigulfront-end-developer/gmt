
// import Image from "next/image";
// import Link from "next/link";
import img1 from "../../../../public/assets/category1.png";
import img2 from "../../../../public/assets/category2.png";
import img3 from "../../../../public/assets/category3.png";
import img4 from "../../../../public/assets/category4.png";
import img5 from "../../../../public/assets/category5.png";
import img6 from "../../../../public/assets/category6.png";
import img7 from "../../../../public/assets/category7.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="px-16 py-5 gap-12 bg-[#F8F7F3]">
      <div className="container">
        <div className=" flex items-center  justify-between">
          <h2 className="text-[#202020] text-3xl font-medium leading-[120%] my-10">
            Популярные категории
          </h2>
          <Link href="/">
            <button className="transition duration-300 flex justify-center items-center px-[20px] py-[11px] rounded-full font-manrope font-semibold text-sm text-white bg-[#088269] border-none">
              Все категории
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="grid grid-cols-1 gap-4">
            <div className="w-[98%] h-[98%] border border-[#E5E2EE] rounded-lg">
              <img
                src={img1}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10 "
              />
              <p className="text-[16px] font-normal p-4 ">
                Дерматологическое оборудование
              </p>
            </div>
            <div className="w-[98%] h-[304px] border border-[#E5E2EE] rounded-lg">
              <img
                src={img2}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              />
              <p className="text-[16px] font-normal p-4">
                Ветеринарное оборудование
              </p>
            </div>
          </div>
          <div className="w-[98%] h-[578px] border border-[#E5E2EE] rounded-lg row-span-2">
            <img
              src={img3}
              alt=""
              className=" w-full h-[470px] object-contain rounded-t-xl bg-white p-10"
            />
            <p className="text-[16px] font-normal p-4">
              Дерматологическое оборудование
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className=" w-[98%] h-[280px] border border-[#E5E2EE] rounded-lg">
              <img
                src={img4}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              />
              <p className="text-[16px] font-normal p-4">
                Оборудование для анастезиологии
              </p>
            </div>
            <div className="w-[98%] h-[280px] border border-[#E5E2EE] rounded-lg">
              <img
                src={img5}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              />
              <p className="text-[16px] font-normal p-4">
                Мебель для медецинских целей
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-[98%] h-[280px] border border-[#E5E2EE] rounded-lg">
              <img
                src={img6}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              />
              <p className="text-[16px] font-normal p-4">
                Оборудование для анастезиологии
              </p>
            </div>
            <div className="w-[98%] h-[280px] border border-[#E5E2EE] rounded-lg">
              <img
                src={img7}
                alt="image"
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
              />
              <p className="text-[16px] font-normal p-4">
                Дерматологическое оборудование
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
