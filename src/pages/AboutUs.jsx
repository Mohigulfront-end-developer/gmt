import { Link, NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Img from "../../public/assets/aboutus/mainimg.png";
import Partner from "../../public/assets/aboutus/partner.png";
import Clinet from "../components/main/client/Clinet";
import Select from "../components/main/select/Select";
import Brend from "../components/main/brend/Brand";
import Question from "../components/main/question/Question";
import Certificate from "../components/aboutUs/Certificate";
import Doctors from "../components/aboutUs/Doctors";
import Number from "../components/aboutUs/Number";

const AboutUs = () => {
 

  return (
    <>
      <div className="bg-[#F8F7F3]">
        <div className="container">
          <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
            <Link to={"/"} className="text-[#7A7687]">
              Главная
            </Link>
            <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
            <NavLink to={"/katalog"} className="">
              О компании
            </NavLink>
          </div>
          <div className="py-5">
            <img src={Img} alt="" className="rounded-lg" />
          </div>

          <div className="flex justify-between items-start py-5">
            <h1 className="text-[48px] font-medium w-[50%]">
              Глобал медикал трейд
            </h1>
            <div className="w-[50%]">
              <p className="text-[16px] font-medium pb-5">
                Учитывая стремительное развитие мировых медицинских технологий,
                врачи в Российской Федерации и соседних странах столкнулись
                с вызовом, требующим обновления приборов в различных
                направлениях, от установок компьютерной томографии
                до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью
                цифровую платформу при диагностике и лечении заболеваний
                также стал серьёзным испытанием для большинства больниц
                и частных клиник.
              </p>
              <p className="text-[16px] font-medium">
                Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
                специалистам всю необходимую помощь в деле поставок медицинского
                оборудования. Наш каталог включает передовое оборудование
                от лучших производителей России, Европы, Азии и США.
              </p>
            </div>
          </div>
        </div>
        <Number />
      </div>
      <div className="bg-[#088269]">
        <div className="container flex justify-between py-20">
          <div className="">
            <img
              src={Partner}
              alt=""
              className="w-full h-full rounded-lg object-cover "
            />
          </div>
          <div className="w-[50%]">
            <h3 className=" pb-6 text-[30px] font-medium text-[#F8F7F3]">
              Наши партнёры
            </h3>
            <p className="text-[#F8F7F3] text-[16px] font-medium">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом
              рынке профильного оборудования. Это позволяет нам наладить
              долгосрочное и успешное сотрудничество, добиться лучших
              цен для государственных учреждений здравоохранения, медицинских
              центров, лабораторий, а также ветеринарных клиник и кабинетов.
              Купить нужную вам технику по оптимальным ценам, выбрать подходящую
              модель устройства в рамках бюджета в нашей компании окажется
              намного проще. Мы поддерживаем скидки и особые предложения
              для наших партнёров, предлагаем оформление аппаратов в лизинг
              и готовы предоставить системы в рассрочку на выгодных условиях.
            </p>
          </div>
        </div>
      </div>
      <Doctors />
      <Clinet />
      <Select />
      <Brend />
      <Certificate />
      <Question />
    </>
  );
};

export default AboutUs;
