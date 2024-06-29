import React from 'react'
import Marquee from "react-fast-marquee"; 
import Clinet1 from "../../../../public/assets/client/image1.svg"
import Clinet2 from "../../../../public/assets/client/image2.svg";
import Clinet3 from "../../../../public/assets/client/image3.svg";
import Clinet4 from "../../../../public/assets/client/image4.svg";




const Clinet = () => {
  return (
    <div className="bg-[#E5E2EE]">
      <div className="container">
        <div className="flex justify-between py-[10%]">
          <h1 className="text-[30px] font-medium text-[#202020]">
            Наши клиенты
          </h1>
          <h2 className="text-[#202020] text-[48px] font-medium">
            БОЛЕЕ{" "}
            <span className="text-[48px] font-medium text-[#088269]">5000</span>
            <br /> УСПЕШНЫХ ПРОЕКТОВ
          </h2>
        </div>
      </div>
      <Marquee className=" flex items-center gap-3 pb-[9%]">
        <div className="xl:w-[95%] h-[100%]  border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-12 ">
            <img src={Clinet1} alt="" className="mx-auto  h-full w-[100%] " />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[50%]  border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet2}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%]  border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet3}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%] border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet4}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%] border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet3}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[50%]  border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet2}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%]  border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-12 ">
            <img src={Clinet1} alt="" className="mx-auto  h-full w-[100%] " />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%] border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet4}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
        <div className="xl:w-[95%] h-[100%] border border-[#F8F7F3] bg-[#F8F7F3]  rounded-lg">
          <div className="bg-white p-8 ">
            <img
              src={Clinet3}
              alt=""
              className="mx-auto  h-[110px] w-[100%] "
            />
          </div>

          <p className="text-[16px] w-[80%] px-4 py-4">
            НМИЦ онкологии им. Н.Н. Блохина
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default Clinet