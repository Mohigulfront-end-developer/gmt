import Hero from './hero/Hero'
import Select from './select/Select'
import Cabinet from './complex/Cabinet'
import Category from './category/Category';

const Main = () => {
  return (
    <div>
      <Hero />
      <Category/>
      <Cabinet />
      <Select />
    </div>
  );
}

export default Main