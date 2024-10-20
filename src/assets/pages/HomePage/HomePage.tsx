import HomepageHeader from "../../components/HomepageHeader/HomepageHeader"
import HeroSectionHomepage from "../../components/HeroSectionHomepage/HeroSectionHomepage";
import GridSectionHomepage from "../../components/GridSectionHomepage/GridSectionHomepage";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="min-h-dvh w-vw">
      <HomepageHeader />
      <HeroSectionHomepage />
      <GridSectionHomepage />
      <Footer />
    </div>
  );
};

export default HomePage;