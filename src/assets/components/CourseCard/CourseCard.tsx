import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import QuickLookCourseDialog from '../QuickLookCourseDialog/QuickLookCourseDialog';
import Button from '@mui/material/Button';

const CourseCard = (props: any) => {
    const { course } = props;
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    return (
        <div className="bg-white w-auto rounded-lg py-4 px-5">
            <div className="flex items-center mb-5">
                <div className={`w-7 h-7 me-4 rounded-full flex items-center justify-center` + (course.end_date ? ' bg-[#0CB43F]' : ' bg-[#A2B6C9]')}>
                    <CheckIcon fontSize='small' sx={{
                        color: '#FFFFFF'
                    }}/>
                </div>
                <span className='text-base font-bold'>{course.name}</span>
            </div>
            <div className='my-[60px]'>
                <div className='flex items-center text-sm font-normal mt-2'>
                    <div className='flex items-center me-6'>
                        <AutoStoriesOutlinedIcon
                            fontSize='small'
                            className='me-1'
                            sx={{ color: '#FF6130' }}
                        />
                        <span className='mb-1 text-sm'>Вкупно лекции : {course.total_lectures}</span>
                    </div>
                    <div className='flex items-center me-6'>
                        <img src="/src/assets/images/BlueClosedBook.svg" className='me-1 w-5 h-5'/>
                        <span className='mb-1 text-sm'>Преостанати лекции : {course.total_lectures - course.passed_lectures}</span>
                    </div>
                </div>
                <div className='flex items-center mt-2'>
                    <AccessTimeOutlinedIcon
                        fontSize='small'
                        className='me-1'
                        sx={{ color: '#FF6130' }}
                    />
                    <span className='mb-1 text-sm'>Просечно време на читање : {course.average_read_time_hours}ч {course.average_read_time_minutes}мин</span>
                </div>
            </div>
            <div className="flex justify-between">
                <Button 
                    onClick={() => setDialogOpen(true)}
                    sx={{
                        color: 'black',
                        border: '2px solid #0CB43F',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        backgroundColor: 'transparent',
                        textTransform: 'none',
                        width: '156px',
                    }}
                >
                    Брз преглед
                </Button>
                <Button
                    sx={{
                        color: 'white',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        backgroundColor: '#0CB43F',
                        textTransform: 'none',
                        width: '156px',
                    }}
                >
                    Започни сега
                </Button>
            </div>
            <QuickLookCourseDialog course={course} open={dialogOpen} handleClose={handleDialogClose} />
        </div>
    );
}

export default CourseCard;