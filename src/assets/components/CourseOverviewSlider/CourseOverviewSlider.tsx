import Slider from '@mui/material/Slider';

const CourseOverviewSlider = (props: any) => {
    const { course } = props;

    const totalCoursesPassedPercantage = (course.passed_lectures / course.total_lectures) * 100;

    return (
        <div className='flex flex-col'>
            <span className='self-end text-[#2870ED] font-bold text-[14px] mb-2'>{totalCoursesPassedPercantage.toFixed(0)}%</span>
            <Slider
                disabled
                defaultValue={totalCoursesPassedPercantage}
                sx={{
                    '& .MuiSlider-track': {
                        color: '#FFAD91',
                    },
                    '& .MuiSlider-rail': {
                        color: '#A2B6C9',
                    },
                    '& .MuiSlider-thumb': {
                        border: '5px solid #2870ED',
                        width: "20px",
                        height: "20px",
                        backgroundColor: '#FFFFFF',
                    },
                }}
            />
        </div>
    )
};

export default CourseOverviewSlider;