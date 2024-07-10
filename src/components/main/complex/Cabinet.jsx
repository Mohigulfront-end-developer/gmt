import { useState } from "react";
import Img1 from "../../../../public/assets/cabinet/complex1.png";
import Img2 from "../../../../public/assets/cabinet/complex2.png";
import Img3 from "../../../../public/assets/cabinet/complex3.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Cabinet = () => {
  const images = [
    { src: Img1, alt: "Экспресс лаборатория" },
    { src: Img2, alt: "Лазерная терапия" },
    { src: Img3, alt: "Операционный блок" },
    { src: Img1, alt: "Экспресс лаборатория" },
    { src: Img2, alt: "Лазерная терапия" },
    { src: Img3, alt: "Операционный блок" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + (images.length - 2)) % (images.length - 1)
    );
  };

  const displayedImages = images.slice(startIndex, startIndex + 3);

  return (
    <div className="bg-[#F8F7F3] pt-[30px]">
      <div className="container mx-auto">
        <h2 className="text-[30px] font-medium ">
          Комплексное оснащение кабинетов
        </h2>
        <div className="flex justify-between items-start gap-2 py-[43px] ">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden w-[425px] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[517px] object-cover"
              />
              <p className="py-[20px] px-5 ">{image.alt}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2 gap-4">
          <div className="lg:flex sm:flex hidden items-center gap-3">
            <div
              onClick={handlePrev}
              className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer hover:border-[#07745E]"
            >
              <GoArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer hover:border-[#07745E]"
            >
              <GoArrowRight />
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer justify-center flex-wrap">
            <Link
              to={"kabinet-podklyuch"}
              className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#07745E] hover:text-[#F8F7F3]"
            >
              Бесплатная консультация
            </Link>
            <Link
              to={"kabinet-podklyuch"}
              className="border text-[14px] font-semibold border-[#D5D1E1] text-[#F8F7F3] rounded-full bg-[#088269] py-2 px-4 hover:bg-[#07745E] hover:text-[#F8F7F3]"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
