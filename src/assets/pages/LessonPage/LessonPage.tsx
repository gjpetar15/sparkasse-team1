import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserSidePanel from "../../components/UserSidePanel/UserSidePanel";
import LessonMainCard from "../../components/LessonMainCard/LessonMainCard";

const LessonPage = () => {
    const { courseId, lessonId } = useParams();
    const [course, setCourse] = useState<any>(null);
    const [lesson, setLesson] = useState<any>(null);

    console.log(courseId, lessonId);

    useEffect(() => {
        const dummyCourse = {
            name: "Лична финансиска гимнастика",
            short_description: "Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.",
            total_lectures: 6,
            passed_lectures: 2,
            average_read_time_hours: 3,
            average_read_time_minutes: 35
        };

        setCourse(dummyCourse);
        // fetch(`https://3763-31-11-83-108.ngrok-free.app/api/lessons/${lessonId}`)
        //     .then(res => res.json())
        //     .then(data => setCourse(data));
    }, [courseId]);

    useEffect(() => {
        const dummyLesson = {
            id: 99,
            name: "Процена на финансиската состојба",
            description: "Евиденцијата на приходите и на расходите е основа за финансиско управување и управување со домаќинство. Водење на буџетот ни овозможува да ја видиме вистинската состојба на своите финансии и да ги распределиме парите што ги имаме  во согласност со приоритетите.",
            type: "blog",
            content: {
              time: 1729414553,
              blocks: [
                {
                  id: "xb4bns-vxQ",
                  type: "header",
                  data: {
                    text: "<b>Сите ние сме експерти</b>",
                    level: 2
                  }
                },
                {
                  id: "ww89UynKGb",
                  type: "paragraph",
                  data: {
                    text: "Евиденцијата на приходите и на расходите претставува основа за управување со финансии и домаќинство. Водењето на буџетот ни овозможува да ја согледаме реалната состојба на своите финансии и да ги распределиме парите што ги имаме во согласност со приоритетите."
                  }
                },
                {
                  id: "g0uw5NDpXa",
                  type: "paragraph",
                  data: {
                    text: "Формирање на буџетот - <b>Дали навистина морам да се занимавам и со ова?</b>&nbsp;"
                  }
                },
                {
                  id: "f6yMT0M7CJ",
                  type: "paragraph",
                  data: {
                    text: "<b>Што ќе научите:</b>"
                  }
                },
                {
                  id: "5EB7UmhI0q",
                  type: "list",
                  data: {
                    style: "ordered",
                    items: [
                      "Да управувате со личните финансии",
                      "Да ги следите вашите трошоци",
                      "Важни факти за финансиите"
                    ]
                  }
                },
                {
                  id: "ZEE3oAw_C4",
                  type: "paragraph",
                  data: {
                    text: "&nbsp;<b>#ДалиЗнаевте </b>-\nдека 70 % од стресот што го чувствуваме е предизвикан од финансиски грижи. („Психологија на успехот“, Дејл Карнеги).&nbsp;"
                  }
                }
              ],
            }
          };

        setLesson(dummyLesson);
        // fetch(`https://3763-31-11-83-108.ngrok-free.app/api/lessons/${lessonId}`)
        //     .then(res => res.json())
        //     .then(data => setLesson(data));
    }, [courseId, lessonId]);

    return (
        <div className="min-h-dvh w-vw">
            <div>
                <UserHeader />
            </div>
            <div className="flex">
                <UserSidePanel />
                <div className="w-full me-[120px]">
                    { lesson && (
                        <div className="mb-8">
                            <LessonMainCard lesson={lesson} course={course}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonPage;