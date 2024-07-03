import React, { useState, useEffect } from "react";
import Data from "../data/catalog";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const StranitsaProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const shopping = Data.find((item) => item.id == id);
  const [selectedImg, setSelectedImg] = useState(shopping?.image);

  useEffect(() => {
    if (shopping) {
      setSelectedImg(shopping.image);
    }
  }, [shopping]);

  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const clicked1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };

  const clicked2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
  };

  const clicked3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
  };

  const clicked4 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
  };

  const minusCount = () => {
    setCount(count === 1 ? 1 : count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="">
        <div className="container">
          <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
            <Link to="/" className="text-[#7A7687]">
              Главная
            </Link>
            <span className="text-[#7A7687]">></span>
            <NavLink to="/katalog/laboratornoe" className="text-[#7A7687]">
              Лабораторное оборудование
            </NavLink>
            <span className="text-[#7A7687]">></span>
            <NavLink to={`/katalog/laboratornoe/${id}`} className="">
              {shopping?.title || "Product"}
            </NavLink>
          </div>
          <div className="flex justify-between gap-10">
            <div className="h-[350px] w-[300px]">
              {shopping ? (
                <div>
                  {[
                    shopping.image,
                    shopping.image,
                    shopping.image,
                    shopping.image,
                  ].map((img, index) => (
                    <img
                      key={index}
                      onClick={() => setSelectedImg(img)}
                      src={img}
                      alt=""
                      className={`mt-[16px] h-[100px] w-[100px] ${
                        selectedImg === img
                          ? "border border-[#46A358] duration-200"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="">
              <img
                src={selectedImg}
                alt="image"
                className="h-[500px] w-[880px]"
              />
            </div>
            <div className="">
              <div className="border-b-2">
                <h2 className="text-[25px] font-bold text-[#3D3D3D]">
                  {shopping?.title}
                </h2>
                <p className="py-2 text-[25px] font-bold text-green-600">
                  {shopping?.price}
                </p>
              </div>
              <p className="text-[18px] font-light"> {shopping?.desc}</p>
              <div className="">
                <h2 className="py-[20px] text-[18px] font-semibold text-[#3D3D3D]">
                  {shopping?.price}
                </h2>
                <div className="flex justify-start gap-5">
                  <button
                    style={{
                      background: isActive1 ? "#46A358" : "",
                      color: isActive1 ? "#fff" : "",
                    }}
                    onClick={clicked1}
                    className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
                  >
                    S
                  </button>
                  <button
                    style={{
                      background: isActive2 ? "#46A358" : "",
                      color: isActive2 ? "#fff" : "",
                    }}
                    onClick={clicked2}
                    className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
                  >
                    M
                  </button>
                  <button
                    style={{
                      background: isActive3 ? "#46A358" : "",
                      color: isActive3 ? "#fff" : "",
                    }}
                    onClick={clicked3}
                    className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
                  >
                    L
                  </button>
                  <button
                    style={{
                      background: isActive4 ? "#46A358" : "",
                      color: isActive4 ? "#fff" : "",
                    }}
                    onClick={clicked4}
                    className="rounded-full border border-green-600 bg-transparent px-4 py-2 text-[18px] text-green-600"
                  >
                    XL
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-start gap-5">
                <button
                  className="rounded-full border bg-green-600 p-2 px-4 text-center text-[18px] font-bold text-white"
                  onClick={minusCount}
                >
                  -
                </button>
                <p className="">{count}</p>
                <button
                  className="rounded-full border bg-green-600 p-2 px-4 text-center text-[18px] font-bold text-white"
                  onClick={plusCount}
                >
                  +
                </button>
                <Link to="/shop/cart">
                  <button className="w-[130px] rounded border border-green-600 bg-transparent px-4 py-2 text-green-600 hover:bg-green-600 hover:text-white">
                    BUY NOW
                  </button>
                </Link>
                <button className="w-[130px] rounded-md border border-green-600 bg-transparent px-2 py-2 text-green-600 hover:bg-green-600 hover:text-white">
                  ADD TO CART
                </button>
                <button className="rounded-md border border-green-600 px-4 py-2 hover:border-rose-500">
                  {/* <FavoriteBorderOutlinedIcon className="text-green-600 hover:text-rose-500" /> */}
                </button>
              </div>
              <div className="">
                <div className="my-5 text-[18px] text-[#3D3D3D]">
                  Share this products:
                </div>
                <div className="flex items-center justify-start gap-4">
                  <i>
                    <FaFacebookF className="text-[20px] text-blue-600" />
                  </i>
                  <i>
                    <FaTwitter className="text-[20px] text-blue-600" />
                  </i>
                  <i>
                    <FaLinkedinIn className="text-[20px] text-blue-600" />
                  </i>
                  <i>
                    <CiMail className="text-[20px] text-[#3D3D3D]" />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StranitsaProduct;
