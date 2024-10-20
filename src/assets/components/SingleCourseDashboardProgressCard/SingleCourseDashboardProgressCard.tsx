import Slider from '@mui/material/Slider';
import CheckIcon from '@mui/icons-material/Check';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Button from '@mui/material/Button';

const SingleCourseDashboardProgressCard = (props: any) => {
    const { course } = props;

    const totalLectures = course.lectures.length;

    const totalCoursesPassedPercantage = (2 / totalLectures) * 100;

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
                <p className="text-base mt-4 mb-20">{course.description}</p>
                <div className='flex flex-col mb-5'>
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
                    <div className='flex items-center text-sm font-normal mt-2'>
                        <div className='flex items-center me-6'>
                            <AutoStoriesOutlinedIcon
                                fontSize='medium'
                                className='me-1'
                                sx={{ color: '#FF6130' }}
                            />
                            <span className='mb-1'>Вкупно лекции : {totalLectures}</span>
                        </div>
                        <div className='flex items-center me-6'>
                            <img src="/src/assets/images/ClosedBook.svg" className='me-1'/>
                            <span className='mb-1'>Преостанати лекции : {totalLectures - 2}</span>
                        </div>
                        <div className='flex items-center'>
                            <SchoolOutlinedIcon
                                fontSize='medium'
                                className='me-1'
                                sx={{ color: '#FF6130' }}
                            />
                            <span className='mb-1'>Просечно време на читање : 3ч35мин</span>
                        </div>
                    </div>
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
