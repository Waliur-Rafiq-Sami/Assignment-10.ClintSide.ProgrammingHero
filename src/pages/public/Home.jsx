import HeroSection from "../../components/HeroSection";
import Navbar from "./../../components/Navbar";
import FeaturedCategories from "./../../components/FeaturedCategories";
import OurCollection from "./../../components/OurCollection";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <OurCollection />
      {/* <FeaturedCategories /> */}
    </div>
  );
};

export default Home;
