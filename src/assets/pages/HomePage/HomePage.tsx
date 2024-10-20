import HomepageHeader from "../../components/HomepageHeader/HomepageHeader"
import HeroSectionHomepage from "../../components/HeroSectionHomepage/HeroSectionHomepage";
import GridSectionHomepage from "../../components/GridSectionHomepage/GridSectionHomepage";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HomepageHeader />
      <HeroSectionHomepage />
      <GridSectionHomepage />
      <Footer />
    </>
  );
};

export default HomePage;