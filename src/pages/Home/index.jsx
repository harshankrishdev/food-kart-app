import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";
import Categories from "../../components/displayCategories";
import { BannerTwo } from "../../components/BannerTwo";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <BannerTwo />
      <ProductsPreview />
      <About />
    </>
  );
};

export default Home;
