import { useState, useEffect } from 'react';
import SingleCourseDashboardProgressCard from '../SingleCourseDashboardProgressCard/SingleCourseDashboardProgressCard';
import Button from '@mui/material/Button';
import CourseCard from '../CourseCard/CourseCard';
import CircularProgress from '@mui/material/CircularProgress';
import { API_URL } from '../../../constants.js';

const WelcomeSection = (props: any) => {
    const { user } = props;

    const [isReturningUser, setIsReturningUser] = useState(user.lastLoginAt ? true : false);
    const [startedCourse, setStartedCourse] = useState<any>(null);
    const [recommendedCourses, setRecommendedCourses] = useState<any>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const defaultUser = {
        first_name: "Томи",
        last_name: "Андреев",
        email: "tomiandreev@mail.com"
    };

    const dummyCourse = {
        name: "Лична финансиска гимнастика",
        short_description: "Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.",
        total_lectures: 6,
        passed_lectures: 2,
        average_read_time_hours: 3,
        average_read_time_minutes: 35
    };

    const dummyCourses = [
        {
            name: "Лична финансиска гимнастика",
            short_description: "Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.",
            total_lectures: 6,
            passed_lectures: 0,
            average_read_time_hours: 3,
            average_read_time_minutes: 35,
            explenation: "Во овој курс ќе ги истражите основните концепти на управувањето со личните финанси, вклучувајќи:",
            end_date: null
        },
        {
            name: "Лична финансиска гимнастика",
            short_description: "Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.",
            total_lectures: 6,
            passed_lectures: 0,
            average_read_time_hours: 3,
            average_read_time_minutes: 35,
            explenation: "Во овој курс ќе ги истражите основните концепти на управувањето со личните финанси, вклучувајќи:",
            end_date: null
        },
        {
            name: "Лична финансиска гимнастика",
            short_description: "Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.",
            total_lectures: 6,
            passed_lectures: 0,
            average_read_time_hours: 3,
            average_read_time_minutes: 35,
            explenation: "Во овој курс ќе ги истражите основните концепти на управувањето со личните финанси, вклучувајќи:",
            end_date: null
        }
    ];

    useEffect(() => {
        if (user.coursesInProgress.length > 0) {
            setStartedCourse(user.coursesInProgress[0]);
        } else {
            const fetchData = async () => {
                try {
                  const response = await fetch(`${API_URL}/courses`, {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          "Accept": "application/json",
                          "ngrok-skip-browser-warning": "69420",
                      }
                  });
          
                  const responseData = (await response.json()).data.slice(0, 3);
                  console.log(responseData);
                  setRecommendedCourses(responseData);
                } catch (error) {
                    setRecommendedCourses(dummyCourses);
                  console.error(error);
                } finally {
                  setIsLoaded(true);
                }
              };
          
              fetchData();
        }
        // setStartedCourse(dummyCourse);
        // setRecommendedCourses(dummyCourses);
    }, []);

    return (
        <div className="mt-14 w-full bg-[#F1F5F7] rounded-xl p-10">
            <div className='flex justify-between'>
                {isReturningUser ? (
                    <div className="text-[#212121] font-bold text-[48px]">
                        <h1>Добредојде назад,</h1>
                        <h1>{user.name}!</h1>
                    </div>
                ) : (
                    <h1 className="text-[#212121] font-bold text-[48px]">Добредојде {user.name}!</h1>
                )}
                <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs self-baseline mt-7">
                        <p>Твојата финансиска иднина започнува тука! За почеток, избравме курсеви според твоите интереси.</p>
                    </div>
                    <div className="relative">
                        <div className='w-[13px] h-[13px] bg-[#2870ED] rounded-[4px] absolute top-8 -left-2'></div>
                        <div className='w-[9px] h-[9px] bg-[#2870ED] rounded-[2px] absolute top-[50px] left-1'></div>
                        <div className='w-[6px] h-[6px] bg-[#2870ED] rounded-[1px] absolute top-[56px] left-5'></div>
                        <img src="/src/assets/images/WelcomeBackPerson.svg"/>
                    </div>
                </div>
            </div>
            {
                startedCourse 
                    ? <SingleCourseDashboardProgressCard course={startedCourse} />
                    : !isLoaded ? <div className='flex items-center justify-center'><CircularProgress /></div> : (
                        <>
                            <p className="text-2xl font-medium mb-6">Препорачано за тебе:</p>
                            <div className='w-full grid grid-cols-3 gap-[50px]'>
                                {recommendedCourses.map((course: any, index: number) => (
                                    <CourseCard course={course} key={index} />
                                ))}
                            </div>
                        </>
                    )
            }
            <div className='flex items-center justify-center'>
                <Button 
                    className='flex items-center justify-center'
                    sx={{
                        backgroundColor: '#FF6130',
                        color: '#FFFFFF',
                        textTransform: 'none',
                        padding: '8px 24px',
                        borderRadius: '8px',
                        marginTop: '20px'
                    }}
                >
                    <span className='me-2'>Разгледај повеќе</span>
                    <img src="/src/assets/images/ButtonArrow.svg" alt="" />
                </Button>
            </div>

        </div>
    );
}

export default WelcomeSection;