import { FC } from "react";
import CourseCardCourses from "../CourseCardCourses/CourseCardCourses";

interface CourseCardSectionCoursesProps {
  theme: 'green' | 'pink'; // Add this prop
}

const CourseCardSectionCourses: FC<CourseCardSectionCoursesProps> = ({ theme }) => {
    return (
      <section>
        <div className="container mx-auto mt-12 mb-8">
          <div className="text-left">
            <h2 className="text-4xl mb-10">
              Преглед на курсеви
            </h2>
          </div>
  
          <div className="flex mb-10 justify-center gap-5">
            {/* First Course Card */}
            <CourseCardCourses
              theme={theme}
              title="Лична Финансиска Гимнастика"
              description="Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција."
              text1="Вкупно лекции : 6"
              text2="Просечно време на читање: 3ч35мин"
            />
            <CourseCardCourses
              theme={theme}
              title="Лична Финансиска Гимнастика"
              description="Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција."
              text1="Вкупно лекции : 6"
              text2="Просечно време на читање: 3ч35мин"
            />
            <CourseCardCourses
              theme={theme}
              title="Лична Финансиска Гимнастика"
              description="Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција."
              text1="Вкупно лекции : 6"
              text2="Просечно време на читање: 3ч35мин"
            />
          </div>
        </div>
      </section>
    );
  };
  

export default CourseCardSectionCourses;

