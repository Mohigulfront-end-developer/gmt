

const MapPunktVidacha = () => {
  return (
    <div className="">
      <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg mb-[50px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.2059578359613!2d69.223697175525!3d41.217282006530105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6108936e27e3%3A0x860a0f4c630d017f!2sGlobal%20Medical%20Center!5e0!3m2!1sru!2s!4v1719634329575!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="bg-[#088269] text-[14px] font-semibold text-[#F8F7F3] px-4 py-2 bottom-14 rounded-full ml-[82%] relative">
          Пункт выдачи
        </button>
      </div>
    </div>
  );
};

export default MapPunktVidacha;
