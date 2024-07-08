import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Data from "../../data/certificate";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const [startIndex, setStartIndex] = useState(0);
   const navigate = useNavigate();

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 5) % Data.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 5 + Data.length) % Data.length);
  };

  const getDisplayedData = () => {
    let displayedData = [];
    for (let i = 0; i < 5; i++) {
      displayedData.push(Data[(startIndex + i) % Data.length]);
    }
    return displayedData;
  };

  const displayedData = getDisplayedData();

  return (
    <div className="bg-[#F8F7F3]">
      <div className="pt-[100px] flex justify-between gap-10">
        <div className="container ">
          <h2 className="ml-[80px] text-[30px] font-medium">
            Сертификаты на продукцию
          </h2>
        </div>
        <div>
          <div className="flex items-center gap-3">
            {displayedData.map((data, index) => (
              <div
                key={index}
                className="border rounded-xl w-[200px] p-4 bg-white"
              >
                <img
                  src={data.image}
                  alt={data.alt}
                  className="w-full h-auto object-cover rounded-t-xl"
                  onClick={() => navigate(`/o-kompanii/certificate`)}
                />
                <p>{data.title}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-[40px]">
            <div className="flex items-center gap-3">
              <div
                onClick={handlePrev}
                className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
              >
                <GoArrowLeft />
              </div>
              <div
                onClick={handleNext}
                className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
              >
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
