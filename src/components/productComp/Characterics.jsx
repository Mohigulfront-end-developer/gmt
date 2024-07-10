import { useState } from "react";
import Img1 from "../../../public/assets/productpage/img1.png";
import Img2 from "../../../public/assets/productpage/img2.png";
import Img3 from "../../../public/assets/productpage/img3.png";
import Img4 from "../../../public/assets/productpage/img4.png";
import Img5 from "../../../public/assets/productpage/otziv.svg";
import { Rate } from "antd";

const Product = () => {
  const [changeBtn, setChangeBtn] = useState("0");
  console.log(changeBtn);
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[20px]">
        <div className="rounded-xl border ">
          <div className="px-[25px] pt-[10px]">
            <div className="sm:w-full w-full overflow-hidden flex gap-20 items-center ">
              <button
                className="active:border-b-[2px] active:border-b-[#07745E]  pb-[10px]"
                onClick={() => setChangeBtn("0")}
              >
                Описание оборудования
              </button>
              <button
                className="active:border-b-[2px] active:border-b-[#07745E]  pb-[10px]"
                onClick={() => setChangeBtn("1")}
              >
                Характеристики и документы
              </button>
              <button
                className="active:border-b-[2px] active:border-b-[#07745E]  pb-[10px]"
                onClick={() => setChangeBtn("2")}
              >
                Услуги и сервис
              </button>
              <button
                className="active:border-b-[2px] active:border-b-[#07745E]  pb-[10px]"
                onClick={() => setChangeBtn("3")}
              >
                Оптовым покупателям
              </button>
              <button
                className="active:border-b-[2px] active:border-b-[#07745E]  pb-[10px]"
                onClick={() => setChangeBtn("4")}
              >
                Отзывы 4
              </button>
            </div>
          </div>
          {changeBtn == "0" && (
            <>
              <div className="bg-white py-4 px-6 border-t-[1px] border-b-[1px]">
                <h3 className="text-[18px] font-semibold mb-[8px]">
                  Описание оборудования
                </h3>
                <p className="text-[14px] font-medium text-[#7A7687] mb-[8px]">
                  Биохимический анализатор Mindr UA-66 оснащен открытой
                  платформой для загрузки образцов и отлично размещается на
                  столе в кабинете врача. Функциональная сочетаемость с
                  дополнительным модулем ISE обеспечивает увеличение
                  «скорострельности» прибора от 100 до 300 обработанных пробирок
                  с биоматериалом в час, а также позволит замерять показатели K,
                  Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе
                  с другими важными параметрами исследования.
                </p>
                <p className="text-[14px] font-medium text-[#7A7687] mb-[8px]">
                  Прибор интуитивно понятен в использовании и техобслуживании,
                  экономен в части финансовых затрат не реагенты. Что важно,
                  калибровка системы аналогична той, что установлена на более
                  современной аппаратуре, и это – идеальный вариант для
                  небольших лабораторий, поскольку емкость погрузчика для проб
                  меньше, чем у мощного оборудования.
                </p>
                <p className="text-[14px] font-medium text-[#7A7687] mb-[5px]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
              </div>
            </>
          )}
          {changeBtn == "1" && (
            <>
              <div className="sm:w-full w-full bg-white px-[25px] border-t-[1px] pb-[20px] border-b-[1px]">
                <h3 className="text-[18px] font-semibold py-4">
                  Технические характеристики
                </h3>
                <div className="flex justify-between">
                  <ul>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Вес оборудования . . . . . . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">90 кг</span>
                    </li>
                    <li className="">
                      <span className="text-[14px] text-[#7A7687]">
                        Детектор . . . . . . . . . . . . . . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">
                        CsI - на основе аморфного кремния
                      </span>
                    </li>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Время сканирования . . . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">
                        PAN стандарт - 12 сек
                      </span>
                    </li>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Размер фокусного пятна . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">0.6</span>
                    </li>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Динамический диапазон . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">
                        16 бит (65 536 градации серого)
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Рабочее напряжение . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">90 кг</span>
                    </li>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Максимальный ток . . . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">
                        CsI - на основе аморфного кремния
                      </span>
                    </li>
                    <li className=" ">
                      <span className="text-[14px] text-[#7A7687]">
                        Гарантия . . . . . . . . . . . . . . . . . . . . .
                      </span>
                      <span className="text-[14px] font-medium">
                        PAN стандарт - 12 сек
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {changeBtn == "2" && (
            <>
              <div className="bg-white py-4 px-6 border-t-[1px] border-b-[1px]">
                <h3 className="text-[18px] font-semibold mb-[20px]">
                  Услуги и сервис
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-[204px] border rounded-xl">
                    <img
                      src={Img1}
                      alt=""
                      className="w-full h-[142px] object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <p className="text-[16px] font-medium ">Апробация</p>
                    </div>
                  </div>
                  <div className="h-[204px] border rounded-xl">
                    <img
                      src={Img2}
                      alt=""
                      className="w-full h-[142px] object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <p className="text-[16px] font-medium ">
                        Помощь в подборе оборудования
                      </p>
                    </div>
                  </div>
                  <div className="h-[204px] border rounded-xl">
                    <img
                      src={Img3}
                      alt=""
                      className="w-full h-[142px] object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <p className="text-[16px] font-medium ">
                        Помощь инженеров в настройке
                      </p>
                    </div>
                  </div>
                  <div className="h-[204px] border rounded-xl">
                    <img
                      src={Img4}
                      alt=""
                      className="w-full h-[142px] object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      {" "}
                      <p className="text-[16px] font-medium ">
                        Пуско-наладочные работы
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-10 mb-5">
                  <button className="px-4 py-2 rounded-full bg-[#088269] text-[#F8F7F3] text-[14px] font-semibold ">
                    Все услуги
                  </button>
                </div>
              </div>
            </>
          )}
          {changeBtn == "3" && (
            <>
              <div className="bg-white py-4 px-6 border-t-[1px] border-b-[1px]">
                <h3 className="text-[18px] font-semibold mb-[8px]">
                  Оптовым покупателям
                </h3>
                <p className="text-[14px] font-medium text-[#7A7687] mb-[20px]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
                <h3 className="text-[18px] font-semibold mb-[8px]">
                  Заголовок
                </h3>
                <p className="text-[14px] font-medium text-[#7A7687] mb-[10px]">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
                <span className="text-[#088269] text-[14px] font-semibold mt-[15px]">
                  Реквизиты для оформеления заказа
                </span>
              </div>
            </>
          )}
          {changeBtn == "4" && (
            <>
              <div className="bg-white py-4 px-6 border-t-[1px] border-b-[1px]">
                <h3 className="text-[18px] font-semibold mb-[8px]">
                  Отзывы <span className="text-[#7A7687]">4</span>
                </h3>
                <div className="border rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img src={Img5} alt="" className="w-[35px] h-[35px]" />
                    <h4 className="text-[18px] font-semibold">
                      Тепляков Максим
                    </h4>
                    <Rate disabled defaultValue={5} className="text-[10x]" />
                    <span className="text-[#7A7687] font-semibold">5.0</span>
                  </div>
                  <p className=" px-10 text-[14px] font-medium text-[#7A7687] mb-[20px]">
                    Только небольшая загрузочная емкость для образцов и
                    химических компонентов, если сравнивать с передовой
                    аналогичной техникой, не позволяет этой системе претендовать
                    на принятие в ряды аппаратуры, которой оснащены
                    крупномасштабные лаборатории.
                  </p>
                </div>

                <div className="border rounded-xl p-4 mt-5">
                  <div className="flex items-center gap-4 mb-2">
                    <img src={Img5} alt="" className="w-[35px] h-[35px]" />
                    <h4 className="text-[18px] font-semibold">
                      Тепляков Максим
                    </h4>
                    <Rate disabled defaultValue={5} className="text-[10x]" />
                    <span className="text-[#7A7687] font-semibold">5.0</span>
                  </div>
                  <p className=" px-10 text-[14px] font-medium text-[#7A7687] mb-[20px]">
                    Только небольшая загрузочная емкость для образцов и
                    химических компонентов, если сравнивать с передовой
                    аналогичной техникой, не позволяет этой системе претендовать
                    на принятие в ряды аппаратуры, которой оснащены
                    крупномасштабные лаборатории.
                  </p>
                </div>
              </div>
            </>
          )}
          <div className=""></div>
          <div className="text-[14px] font-medium text-[#07745E] flex flex-wrap gap-[40px] py-[10px] px-[25px]">
            <p>Новинки</p>
            <p>Получить прайс</p>
            <p>Условия доставки</p>
            <p>Способы оплаты</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
