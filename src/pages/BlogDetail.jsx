import { Link, NavLink } from 'react-router-dom';
import Img1 from "../../public/assets/statya/img1.png"
import Img2 from "../../public/assets/statya/img2.png";
import Img3 from "../../public/assets/statya/img3.png";
import Img4 from "../../public/assets/statya/img4.png";
import RecommendProduct from '../components/blog/RecommendProduct';
import Cabinet  from "../components/main/complex/Cabinet"
import Brend from "../components/main/brend/Brand";
import Concult from "../components/garantii/Consult"
import { RiArrowRightSLine } from "react-icons/ri";



const BlogDetail = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[100px]">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/blog"} className="text-[#7A7687]">
            Блог
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/blog/informatsioniy-statya"} className="">
            Информационная статья
          </NavLink>
        </div>
        <div className="bg-white p-[35px] border rounded-xl">
          <h1 className=" text-[48px] font-meidum">Информационная статья</h1>
          <span className="text-[14px] text-[#7A7687]">Автор: Иванов Р.</span>
          <h4 className="text-[30px] medium pt-10 pb-[10px] font-semibold">
            Содержание:
          </h4>
          <ol className="list-decimal px-[20px] mb-[60px]">
            <li className="text-[14px] text-[#7A7687] font-medium">
              Новая модель организационной деятельности
            </li>
            <li className="text-[14px] text-[#7A7687] font-medium">
              Мы вынуждены отталкиваться от того, что курс
            </li>
            <li className="text-[14px] text-[#7A7687] font-medium">
              Новая модель организационной деятельности
            </li>
            <li className="text-[14px] text-[#7A7687] font-medium">
              Мы вынуждены отталкиваться от того, что курс
            </li>
          </ol>
          <h3 className="text-[30px] font-medium mb-[10px]">
            Новая модель организационной деятельности
          </h3>
          <p className="text-[16px] font-medium mb-[40px]">
            Равным образом, внедрение современных методик однозначно фиксирует
            необходимость поэтапного и последовательного развития общества. В
            частности, постоянное информационно-пропагандистское обеспечение
            нашей деятельности, а также свежий взгляд на привычные вещи —
            безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный
            рост и сфера нашей активности создаёт предпосылки для
            соответствующих условий активизации.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-[70px]">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
          </div>
          <h3 className="text-[30px] font-medium mb-[10px]">
            Новая модель организационной деятельности
          </h3>
          <p className="text-[16px] font-medium">
            Равным образом, внедрение современных методик однозначно фиксирует
            необходимость поэтапного и последовательного развития общества. В
            частности, постоянное информационно-пропагандистское обеспечение
            нашей деятельности, а также свежий взгляд на привычные вещи —
            безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный
            рост и сфера нашей активности создаёт предпосылки для
            соответствующих условий активизации.
          </p>
          <div className="bg-[#E1EFE6] p-[30px] rounded-lg my-[40px]">
            <p className="text-[16px] font-medium">
              Равным образом, внедрение современных методик однозначно фиксирует
              необходимость поэтапного и последовательного развития общества. В
              частности, постоянное информационно-пропагандистское обеспечение
              нашей деятельности, а также свежий взгляд на привычные вещи —
              безусловно открывает новые горизонты для стандартных подходов.
              Каждый из нас понимает очевидную вещь: постоянный количественный
              рост и сфера нашей активности создаёт предпосылки для
              соответствующих условий активизации.
            </p>
          </div>
          <h3 className="text-[30px] font-medium mb-[10px]">
            Новая модель организационной деятельности
          </h3>
          <p className="text-[16px] font-medium mb-[40px]">
            Равным образом, внедрение современных методик однозначно фиксирует
            необходимость поэтапного и последовательного развития общества. В
            частности, постоянное информационно-пропагандистское обеспечение
            нашей деятельности, а также свежий взгляд на привычные вещи —
            безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный
            рост и сфера нашей активности создаёт предпосылки для
            соответствующих условий активизации.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-[70px]">
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
          </div>
          <h3 className="text-[30px] font-medium mb-[10px]">
            Новая модель организационной деятельности
          </h3>
          <p className="text-[16px] font-medium mb-[40px]">
            Равным образом, внедрение современных методик однозначно фиксирует
            необходимость поэтапного и последовательного развития общества. В
            частности, постоянное информационно-пропагандистское обеспечение
            нашей деятельности, а также свежий взгляд на привычные вещи —
            безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный
            рост и сфера нашей активности создаёт предпосылки для
            соответствующих условий активизации.
          </p>
        </div>
      </div>
      <RecommendProduct />
      <Cabinet />
      <Brend />
      <Concult />
    </div>
  );
}

export default BlogDetail