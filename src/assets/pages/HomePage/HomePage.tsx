import HomepageHeader from "../../components/HomepageHeader/HomepageHeader"
import HeroSectionHomepage from "../../components/HeroSectionHomepage/HeroSectionHomepage";
import GridSectionHomepage from "../../components/GridSectionHomepage/GridSectionHomepage";
import Footer from "../../components/Footer/Footer";
import BrankaSection from "../../components/BrankaSection/BrankaSection";
import IconsSection from "../../components/IconSection/IconSection";
import CourseSectionHomepage from "../../components/CourseSectionHomepage/CourseSectionHomepage";
import NumbersSection from "../../components/NumbersSection/NumbersSection";
import SingleBannerSection from "../../components/SingleBannerSection/SingleBannerSection";
import CarouselSection from "../../components/CarouselSection/CarouselSection";

const HomePage = () => {
  return (
    <div className="min-h-dvh w-vw">
      <HomepageHeader />
      <HeroSectionHomepage />
      <GridSectionHomepage />
      <BrankaSection />
      <CourseSectionHomepage />
      <IconsSection />
      <NumbersSection />
      <SingleBannerSection />
      <CarouselSection />
      <Footer />
    </div>
  );
};

export default HomePage;