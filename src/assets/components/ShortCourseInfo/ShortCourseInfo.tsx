import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const ShortCourseInfo = (props: any) => {
    const { course } = props;

    return (
        <div className='flex items-center text-sm font-normal mt-2'>
            <div className='flex items-center me-6'>
                <AutoStoriesOutlinedIcon
                    fontSize='medium'
                    className='me-1'
                    sx={{ color: '#FF6130' }}
                />
                <span className='mb-1'>Вкупно лекции : {course.total_lectures}</span>
            </div>
            <div className='flex items-center me-6'>
                <img src="/src/assets/images/ClosedBook.svg" className='me-1'/>
                <span className='mb-1'>Преостанати лекции : {course.total_lectures - course.passed_lectures}</span>
            </div>
            <div className='flex items-center'>
                <SchoolOutlinedIcon
                    fontSize='medium'
                    className='me-1'
                    sx={{ color: '#FF6130' }}
                />
                <span className='mb-1'>Просечно време на читање : {course.average_read_time_hours}ч{course.average_read_time_minutes}мин</span>
            </div>
        </div>
    )
};

export default ShortCourseInfo;