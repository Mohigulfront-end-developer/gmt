import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../../data/catalog"; // Adjust the path as necessary

const Favorites = ({ favorites }) => {
  const navigate = useNavigate();
  const favoriteItems = Data.filter((item) => favorites.includes(item.id));

  return (
    <div className="bg-[#F8F7F3] p-[100px]">
      <h2 className="text-[30px] font-medium mb-10">Избранные товары</h2>
      <div className="flex flex-wrap gap-4">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => (
            <div
              key={item.id}
              className="card border rounded-xl w-[300px] relative"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10 cursor-pointer"
                onClick={() => navigate(`/katalog/laboratornoe/${item.id}`)}
              />
              <div className="p-4">
                <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                  {item.title}
                </h3>
                <div className="py-4">
                  <span className="block text-[#7A7687] text-[14px] font-normal ">
                    {item.desc}
                  </span>
                  <p className="text-[16px] font-normal text-[#7A7687]">
                    {item.position}
                  </p>
                </div>
                <p className="text-[16px] font-medium text-[#202020]">
                  {item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Нет избранных товаров.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
