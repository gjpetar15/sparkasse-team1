import { Button } from "@mui/material";
import ShortCourseInfo from "../ShortCourseInfo/ShortCourseInfo";
import CourseOverviewSlider from "../CourseOverviewSlider/CourseOverviewSlider";

const LessonMainCard = (props: any) => {
    const { lesson, course } = props;
    console.log(lesson)
    return (
        <div className="mt-14 w-full bg-[#F1F5F7] rounded-xl p-10">
            <div className="w-3/5">
                <Button
                    variant="text"
                    sx={{
                        textTransform: 'none'
                    }}
                >
                    <img src="/src/assets/images/BackArrow.svg" className="me-4"/>
                    <span className="text-[#212121] text-base">Назад</span>
                </Button>
                <div className="text-[#212121] font-bold text-[48px] mt-3 mb-16">
                        <h1 className="text-5xl">{lesson.name}</h1>
                        <p className="text-lg font-normal mt-20">{lesson.description}</p>
                </div>
                <div>
                    <ShortCourseInfo course={course} />
                    <CourseOverviewSlider course={course} />
                </div>
                <div className='mt-8'>
                    <Button 
                        className='flex items-center justify-center'
                        sx={{
                            backgroundColor: '#0CB43F',
                            color: '#FFFFFF',
                            textTransform: 'none',
                            padding: '16px 32px',
                            height: '40px',
                            borderRadius: '4px',
                        }}
                    >
                        <span className='me-2'>Реши го тестот</span>
                    </Button>
                </div>
            </div>
            {/* 
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
            </div> */}

        </div>
    )
};

export default LessonMainCard;