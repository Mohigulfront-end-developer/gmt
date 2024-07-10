import { useState, useEffect } from "react";
import Data from "../data/catalog";
import { Link, NavLink, useParams } from "react-router-dom";
import Product from "../components/productComp/Characterics";
import Catalog from "../components/main/catalog/Catalog";
import Cabinet from "../components/main/complex/Cabinet";
import Brend from "../components/main/brend/Brand";
import Course from "../components/main/course/Course";
import CategoryProduct from "../components/productComp/CategoryProduct";
import { RiArrowRightSLine } from "react-icons/ri";
import { Rate } from "antd";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/addToCard";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { handleCompare } from "../redux/Compare";
import { handleLiked } from "../redux/Liked";

const StranitsaProduct = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id == id);
  const [selectedImg, setSelectedImg] = useState(product?.image);
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  const [compare, setCompare] = useState([]);

  useEffect(() => {
    if (product) {
      setSelectedImg(product.image);
    }
  }, [product]);

  console.log(product);

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const handleCompareToggle = (id) => {
    setCompare((prevCompare) =>
      prevCompare.includes(id)
        ? prevCompare.filter((compId) => compId !== id)
        : [...prevCompare, id]
    );
  };

  return (
    <div>
      <div className="bg-[#F8F7F3] ">
        <div className="container">
          <div className="flex  items-center gap-2 py-5 text-[16px] font-normal">
            <Link to="/" className="text-[#7A7687] sm:flex hidden">
              Главная
            </Link>
            <RiArrowRightSLine className="text-[20px] text-[#7A7687] sm:flex hidden" />
            <Link to="/katalog" className="text-[#7A7687] sm:flex hidden">
              Каталог
            </Link>
            <RiArrowRightSLine className="text-[20px] text-[#7A7687] sm:flex hidden" />
            <Link
              to="/katalog/laboratornoe"
              className="text-[#7A7687] sm:flex hidden"
            >
              Лабораторное оборудование
            </Link>
            <RiArrowRightSLine className="text-[20px] text-[#7A7687] sm:flex hidden" />
            <NavLink
              to={`/katalog/laboratornoe/${id}`}
              className="sm:flex hidden"
            >
              {product?.title || "Product"}
            </NavLink>
          </div>
          <div className="lg:flex grid grid-cols-1 justify-between gap-5 pb-[60px]">
            <div className="lg:w-[50%] h-[450px] sm:w-full border rounded-lg  bg-[white]">
              <div className="p-10">
                <img
                  src={selectedImg}
                  alt="image"
                  className="w-[300px] h-[300px] object-cover mx-auto"
                />

                <div className="">
                  <RiAlignItemBottomLine
                    className={`relative bottom-[325px] left-[85%]  text-2xl cursor-pointer w-[35px] h-[35px] ${
                      compare.includes(product.id)
                        ? "text-[#088269]"
                        : "text-[#202020]"
                    }`}
                    onClick={() => {
                      handleCompareToggle(product.id);
                      dispatch(handleCompare(product));
                    }}
                  />
                  <IoIosHeartEmpty
                    className={`relative bottom-[360px] left-[95%] text-2xl cursor-pointer w-[35px] h-[35px] ${
                      favorites.includes(product.id)
                        ? "text-[#088269]"
                        : "text-[#202020]"
                    }`}
                    onClick={() => {
                      handleFavoriteToggle(product.id);
                      dispatch(handleLiked(product));
                    }}
                  />
                </div>
              </div>

              <div className="px-2 h-[150px] w-[150px]">
                {product ? (
                  <div className="flex gap-4 ">
                    {[product.image, product.image, product.image].map(
                      (img, index) => (
                        <img
                          key={index}
                          onClick={() => setSelectedImg(img)}
                          src={img}
                          alt=""
                          className={`mt-[-90px] h-[70px] w-[70px] p-2 border rounded-xl${
                            selectedImg === img
                              ? "border  duration-200 rounded-lg"
                              : ""
                          }`}
                        />
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="lg:w-[45%] sm:w-full">
              <div className="">
                <h2 className="text-[30px] font-semibold text-[#3D3D3D]">
                  {product?.title}
                </h2>
                <div className="flex gap-2 my-2 items-center">
                  <Rate disabled defaultValue={4} />
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
                  {product?.price} руб.
                </p>
              </div>
              <div className="mt-2 sm:flex grid grid-cols-1 items-center justify-start gap-4 border-b-[1px] pb-[20px]">
                <div className="border rounded-full px-4 h-[45px] flex justify-between items-center gap-5 ">
                  <button
                    className="text-center text-[20px] font-medium hover:text-[#088269] "
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <p className="text-[#088269] text-[14px] font-medium">
                    {product.qty} 1
                  </p>
                  <button
                    className="text-center text-[20px] font-medium  hover:text-[#088269]"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>

                <Link to="/">
                  <button className="w-full rounded-full border  text-[#088269] bg-transparent px-6 py-[10px] hover:border-[#07745E] hover:text-[#07745E] ">
                    Задать вопрос
                  </button>
                </Link>
                <Link
                  onClick={() => dispatch(addToCart(product))}
                  className=" rounded-full  bg-[#088269] px-6 py-[10px]  border   text-[#F8F7F3] gover:bg-[#07745E]"
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
    </div>
  );
};

export default StranitsaProduct;
