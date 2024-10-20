import CourseCardHomepage from "../CourseCardHomepage/CourseCardHomepage";

const CourseSectionHomepage = () => {
  return (
    <section>
      <div className="container mx-auto mt-12 mb-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#FF6130] mb-10">
            Разгледај ги нашите курсеви.
          </h2>
        </div>

        <div className="flex mb-10 justify-center px-52 gap-5">
          {/* First Course Card */}
          <CourseCardHomepage 
            title="НАУЧИ ЗА СЕБЕ."
            description="Овој модул ви помага брзо и лесно да ги совладате основните вештини за лични финансии и управување со пари."
            buttonText="Прочитај повеќе"
            theme="green"
          />

          {/* Second Course Card */}
          <CourseCardHomepage 
            title="НАУЧИ ЗА СВОЈОТ БИЗНИС."
            description="Овој модул ви нуди практични знаења за градење и проширување на вашиот бизнис преку брзи лекции."
            buttonText="Види курс"
            theme="purple"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSectionHomepage;
