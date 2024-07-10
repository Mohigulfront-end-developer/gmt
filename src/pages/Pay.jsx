import { Link, NavLink } from "react-router-dom";
import Consult from "../components/garantii/Consult";
import { RiArrowRightSLine } from "react-icons/ri";

const Oplata = () => {
  return (
    <div className="bg-[rgb(248,247,243)]">
      <div className="container">
        <div className="flex items-center gap-2 py-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/oplata"} className="">
            Оплата
          </NavLink>
        </div>
        <div className="pt-[50px]">
          <h1 className="text-[48px] font-medium py-5">Оплата</h1>
          <p className=" w-[50%] text-[16px] font-medium text-[#202020]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов.{" "}
          </p>
          <div className="grid grid-cols-3  gap-3 my-[40px]">
            <div className="border rounded-lg p-5 bg-[white] ">
              <h4 className="text-[18px] font-medium">Оплата наличными</h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Также как постоянное обеспечение нашей деятельности требует
                  определения{" "}
                </li>
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
                <li>Также как постоянное обеспечение нашей</li>
              </ol>
            </div>
            <div className="border rounded-lg p-5 bg-[white]">
              <h4 className="text-[18px] font-medium">Безналичный расчет</h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Также как постоянное обеспечение нашей деятельности требует
                  определения
                </li>
                <li>Также как постоянное обеспечение нашей</li>
                <li>Также как постоянное</li>
              </ol>
            </div>
            <div className="border rounded-lg p-5 bg-[white]">
              <h4 className="text-[18px] font-medium">
                Оплата банковской картой
              </h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
                <li>Также как постоянное обеспечение нашей</li>
                <li>Также как постоянное</li>
                <li>Также как постоянное обеспечение е</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="pt-[50px]">
          <h1 className="text-[48px] font-medium py-5">
            Порядок возврата денежных средств
          </h1>
          <p className=" w-[50%] text-[16px] font-medium text-[#202020]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов.
          </p>
          <div className="grid grid-cols-3  gap-3 my-[40px]">
            <div className="border rounded-lg p-5 bg-[white] ">
              <h4 className="text-[18px] font-medium">При оплате наличными</h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Также как постоянное обеспечение нашей деятельности требует
                  определения{" "}
                </li>
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
              </ol>
            </div>
            <div className="border rounded-lg p-5 bg-[white]">
              <h4 className="text-[18px] font-medium">
                Оплата банковской картой
              </h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
                <li>Также как постоянное обеспечение нашей</li>
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="pt-[50px]">
          <h1 className="text-[48px] font-medium py-5">Условия поставок</h1>
          <p className="w-[50%] text-[16px] font-medium text-[#202020]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов.
          </p>
          <div className="grid grid-cols-3  gap-3 my-[40px]">
            <div className="border rounded-lg p-5 bg-[white] ">
              <h4 className="text-[18px] font-medium">Лизинг</h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Также как постоянное обеспечение нашей деятельности требует
                  определения{" "}
                </li>
                <li>Также как постоянное</li>
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
              </ol>
            </div>
            <div className="border rounded-lg p-5 bg-[white]">
              <h4 className="text-[18px] font-medium">Рассрочка</h4>
              <ol className="px-4 py-2 list-decimal text-[#7A7687] font-medium text-[16px]">
                <li>
                  Требующим обновления приборов в различных направлениях,
                  от установок компьютерной томографии
                </li>
                <li>Также как постоянное</li>
                <li>Также как постоянное обеспечение нашей</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Consult />
    </div>
  );
};

export default Oplata;
