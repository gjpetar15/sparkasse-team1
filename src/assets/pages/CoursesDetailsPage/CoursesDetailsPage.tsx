import HomepageHeader from "../../components/HomepageHeader/HomepageHeader"
import Footer from "../../components/Footer/Footer";
import HeroPageCourses from "../../components/HeroPageCourses/HeroPageCourses";
import SingleBannerCoursesSection from "../../components/SingleBannerCourses/SingleBannerCourses";
import CourseCardSectionCourses from "../../components/CourseCardSectionCourses/CourseCardSectionCourses";

const CoursesDetailsPage = () => {
  return (
    <div className="min-h-dvh w-vw">
      <HomepageHeader />
      <HeroPageCourses />
      <CourseCardSectionCourses theme={"green"} />
      <HeroPageCourses leftBgColor="#EB4C79" rightBgColor="#721C7A" />
      <CourseCardSectionCourses theme={"pink"} />
      <SingleBannerCoursesSection />
      <Footer />
    </div>
  );
};

export default CoursesDetailsPage;