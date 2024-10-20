import Slider from '@mui/material/Slider';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import ShortCourseInfo from '../ShortCourseInfo/ShortCourseInfo';
import CourseOverviewSlider from '../CourseOverviewSlider/CourseOverviewSlider';

const SingleCourseDashboardProgressCard = (props: any) => {
    const { course } = props;

    const totalCoursesPassedPercantage = (course.passed_lectures / course.total_lectures) * 100;

    return (
        <div>
            <p className="text-2xl font-medium mb-6">Продолжи каде што застана:</p>
            <div className="w-full bg-white rounded-lg p-6">
                <div className="flex items-center">
                    <div className="w-7 h-7 me-4 bg-[#A2B6C9] rounded-full flex items-center justify-center">
                        <CheckIcon fontSize='small'/>
                    </div>
                    <span>{course.name}</span>
                </div>
                <p className="text-base mt-4 mb-20">{course.short_description}</p>
                <div className='mb-5'>
                    <CourseOverviewSlider course={course} />
                    <ShortCourseInfo course={course} />
                </div>
                <Button
                    sx={{
                        backgroundColor: '#0CB43F',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        width: '150px',
                        textTransform: 'none',
                        fontWeight: 'normal',
                        '&:hover': {
                            backgroundColor: '#0CB43F',
                        },
                    }}
                >
                    Продолжи курс
                </Button>
            </div>
        </div>
    );
};

export default SingleCourseDashboardProgressCard;
