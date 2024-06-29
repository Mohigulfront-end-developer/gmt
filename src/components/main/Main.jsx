import Hero from './hero/Hero'
import Select from './select/Select'
import Cabinet from './complex/Cabinet'
import Category from './category/Category';
import Brand from './brend/Brand';
import Clinet from './client/Clinet';
import Infom from './inform/Infom';
import News from './news/News';
import Catalog from './catalog/Catalog';
import  Question  from './question/Question';
import Course from './course/Course';

const Main = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Cabinet />
      <Select />
      <Catalog />
      <Clinet />
      <Brand />
      <Infom />
      <News />
      <Question/>
      <Course/>
    </div>
  );
}

export default Main