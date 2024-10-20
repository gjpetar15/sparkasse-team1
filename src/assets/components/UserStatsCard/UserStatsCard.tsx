import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const UserStatsCard = (props: any) => {
    const { title, stat, showExtraText, color, badge } = props;

    return (
        <div className="w-[200px] h-[200px] rounded-2xl p-6 flex flex-col justify-between bg-[#F1F5F7] relative">
            {
                badge ? (
                    <>
                        <InfoOutlinedIcon sx={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            color: '#2870ED'
                        }}/>
                        <div className="flex items-center justify-center w-full h-full">
                            <img src={badge} />
                        </div>
                    </>
                ) : (
                    <>
                    <div className="text-[14px] font-normal" style={{ color }}>{title}</div>
                    <div className="flex items-center justify-between">
                        <div className="w-[4.43px] h-[33.33px] rounded-2xl" style={{ backgroundColor: color }}></div>
                        <div className="text-[40px] font-bold" style={{ color }}>
                            {stat}
                            {showExtraText && <span className="text-[16px] font-normal" style={{ color }}>часа</span>}
                        </div>
                    </div>
                    </>
                )
            }
        </div>
    );
};

export default UserStatsCard;