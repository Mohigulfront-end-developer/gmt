import Brend from '../components/main/brend/Brand'
import Cabinet from '../components/main/complex/Cabinet';
import Select from '../components/main/select/Select';
import Catalog from "../components/main/catalog/Catalog";
import Question from '../components/main/question/Question';
import Course from '../components/main/course/Course';
import Infom from '../components/main/inform/Infom';
import News from '../components/main/news/News';


const CatalogPage = () => {
  return (
    <div>
      <div className="container"></div>
      <Cabinet />
      <Select />
      <Catalog />
      <Brend />
      <News />
      <Infom/>
      <Question />
      <Course />
    </div>
  );
}

export default CatalogPage