import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import Slide from "@mui/material/Slide";
import { TransitionProps } from '@mui/material/transitions';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const QuickLookCourseDialog = (props: any) => {
    const { course, open, handleClose } = props;
    const [lectures, setLectures] = React.useState<any[]>([]);

    const calculatedReadTime = () => {
        const hours = course.average_read_time_hours;
        const minutes = course.average_read_time_minutes;

        if (minutes > 30) {
            return `Приближно ${hours + 1} часа`;
        } else {
            return `Приближно ${hours} часа`;
        }
    }

    React.useEffect(() => {
        const lectures = [
            {
                name: "Буџетирање",
                duration: "1ч 30мин"
            },
            {
                name: "Штедење",
                duration: "1ч 30мин"
            },
            {
                name: "Трошење",
                duration: "1ч 30мин"
            },
            {
                name: "Инвестиции",
                duration: "1ч 30мин"
            },
            {
                name: "Заеми",
                duration: "1ч 30мин"
            },
            {
                name: "Даноци",
                duration: "1ч 30мин"
            }
        ];

        setLectures(lectures);
    }, []);

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            maxWidth='md'
        >
            <div className='p-10'>
                <div className="w-full h-[250px] bg-[#2870ED] ps-10 rounded-lg flex items-center">
                    <div>
                        <p className='text-lg font-bold text-white mb-2'>{course.name}</p>
                        <p className='text-base font-normal text-white text-wrap'>{course.short_description}</p>
                    </div>
                    <img className='ms-auto' src="/src/assets/images/QuickLookCourseDialog.png"/>
                </div>
                <div className='w-full border-2 border-[#FF6130] rounded-lg mt-8'>
                    <div className='h-[56px] text-white w-full flex justify-center items-center bg-[#FF6130] rounded-t'>
                        <span>За курсот</span>
                    </div>
                    <div className='m-10'>
                        <p className='text-[24px] font-normal leading-[24px] mb-6'>{course.explenation}</p>
                        <div>
                            <b>Време на читање:</b>
                            <span> {calculatedReadTime()}</span>
                        </div>
                        <div>
                            <b>Вкупно лекции:</b>
                            <span> {course.total_lectures} лекции</span>
                        </div>
                        <div className='px-10 mt-6'>
                            {lectures.map((lecture, index) => (
                                <div key={lecture.name + index} className='flex items-center mb-4'>
                                    <span className='w-[29px] h-[33px] bg-[#721C7A] text-white text-lg rounded text-center pt-[2px] me-8'>{index}</span>
                                    <span>{lecture.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <Button
                                onClick={handleClose}
                                sx={{
                                    backgroundColor: '#FF6130',
                                    color: '#FFFFFF',
                                    height: '40px',
                                    textTransform: 'none',
                                    padding: '16px 32px',
                                    borderRadius: '8px',
                                    marginTop: '24px'
                                }}
                            >
                                Започни курс
                            </Button>
                        </div>
                        <div className='flex items-start mt-6'>
                            <InfoOutlinedIcon
                                className='mt-1'
                                sx={{
                                    color: '#721C7A'
                                }} 
                            />
                            <div className='text-base ms-[10px]'>
                                <p className='mb-5'>По завршувањето на секој курс, добивате сертификат за вашето знаење и постигнувања, кој можете да го преземете во PDF формат и споделите на социјалните мрежи. Ако точно одговорите на 7, 8 или 9 од 10 прашања, добивате стандарден сертификат. За 10/10 точни одговори, добивате сертификат со посебна ознака.</p>
                                <p>Со завршувањето на одреден број курсеви, освојувате беџови, кои го покажуваат вашиот напредок и посветеност во учењето.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default QuickLookCourseDialog;
