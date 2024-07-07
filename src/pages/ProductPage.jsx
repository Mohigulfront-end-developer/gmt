import React, { useState, useEffect } from "react";
import Data from "../data/catalog";
import { Link, NavLink, useParams } from "react-router-dom";
import Product from "../components/productComp/Characterics";
import Star from "../../public/assets/productpage/star.svg"
import Catalog from "../components/main/catalog/Catalog"
import Cabinet from "../components/main/complex/Cabinet";
import Brend from "../components/main/brend/Brand";
import Course from "../components/main/course/Course"
import CategoryProduct from "../components/productComp/CategoryProduct";
import ProductData from "../components/productComp/ProductData";




const StranitsaProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const product = Data.find((item) => item.id == id);
  const [selectedImg, setSelectedImg] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setSelectedImg(product.image);
    }
  }, [product]);

  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  // const [isActive4, setIsActive4] = useState(false);

  const clicked1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    // setIsActive4(false);
  };

  const clicked2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    // setIsActive4(false);
  };

  const clicked3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    // setIsActive4(false);
  };

  // const clicked4 = () => {
  //   setIsActive1(false);
  //   setIsActive2(false);
  //   setIsActive3(false);
  //   setIsActive4(true);
  // };

  const minusCount = () => {
    setCount(count === 1 ? 1 : count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="bg-[#F8F7F3] ">
        <div className="container">
          <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
            <Link to="/" className="text-[#7A7687]">
              Главная
            </Link>
            <Link to="/katalog" className="text-[#7A7687]">
              > Каталог
            </Link>
            <span className="text-[#7A7687]">></span>
            <Link to="/katalog/laboratornoe" className="text-[#7A7687]">
              Лабораторное оборудование
            </Link>
            <span className="text-[#7A7687]">></span>
            <NavLink to={`/katalog/laboratornoe/${id}`} className="">
              {product?.title || "Product"}
            </NavLink>
          </div>
          <div className="flex justify-between gap-5 pb-[60px]">
            <div className="w-[50%] h-[450px] border rounded-lg  bg-[white]">
              <div className="p-10">
                <img
                  src={selectedImg}
                  alt="image"
                  className="w-[300px] h-[300px] object-cover mx-auto"
                />
              </div>

              <div className="px-2 h-[150px] w-[150px]">
                {product ? (
                  <div className="flex gap-4 ">
                    {[
                      product.image,
                      product.image,
                      product.image,
                      // product.image,
                    ].map((img, index) => (
                      <img
                        key={index}
                        onClick={() => setSelectedImg(img)}
                        src={img}
                        alt=""
                        className={`mt-[-20px] h-[70px] w-[70px] p-2 border rounded-xl${
                          selectedImg === img
                            ? "border  duration-200 rounded-lg"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-[45%]">
              <div className="">
                <h2 className="text-[30px] font-semibold text-[#3D3D3D]">
                  {product?.title}
                </h2>
                <div className="flex gap-2 my-2 items-center">
                  <img src={Star} alt="" />
                  <p className="font-medium text-[#202020] opacity-80 text-[14px]">
                    4.0
                  </p>
                </div>

                <p className="text-[12px] font-normal text-[#7A7687]">
                  Категория: {product?.category}
                </p>
                <p className="text-[12px] font-normal text-[#7A7687]">
                  Производитель: Lorem
                </p>
                <p className="text-[12px] font-normal text-[#7A7687]">
                  Артикул: {product?.desc}
                </p>
                <p className="text-[12px] font-normal text-[#7A7687]">
                  {product?.position}
                </p>
                <p className="py-3 text-[18px] font-semibold">
                  {product?.price}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-start gap-4 border-b-[1px] pb-[20px]">
                <div className="border rounded-full px-4 h-[45px] flex justify-between items-center gap-5 ">
                  <button
                    className="text-center text-[20px] font-medium hover:text-[#088269] "
                    onClick={minusCount}
                  >
                    -
                  </button>
                  <p className="text-[#088269] text-[14px] font-medium">
                    {count}
                  </p>
                  <button
                    className="text-center text-[20px] font-medium  hover:text-[#088269]"
                    onClick={plusCount}
                  >
                    +
                  </button>
                </div>

                <Link to="/">
                  <button className=" rounded-full border  text-[#088269] bg-transparent px-6 py-[10px] ">
                    Задать вопрос
                  </button>
                </Link>
                <Link
                  to={"/katalog/korzinka"}
                  className=" rounded-full  bg-[#088269] px-6 py-[10px]  border   text-[#F8F7F3]"
                >
                  Добавить в корзину
                </Link>
              </div>
              <div className="">
                <h2 className="my-3 text-[18px] font-medium text-[#3D3D3D]">
                  О товаре
                </h2>
                <p className="text-[14px] font-medium text-[#202020] opacity-80">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <Catalog />
      <Cabinet />
      <CategoryProduct />
      <Brend />
      <Course />
      <ProductData />
    </div>
  );
};

export default StranitsaProduct;
