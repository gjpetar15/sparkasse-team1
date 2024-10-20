import Button from "@mui/material/Button";

const DashboardInfoCard = (props: any) => {
    const { title, info, color, buttonText, graph } = props;

    const renderGraph = () => {
        if (graph)  {
            const calculateHeight = (data: number) => {
                const heightMapRanges = [[1, 10], [11, 20], [21, 30], [31, 40], [41, 50]];

                for (let i = 0; i < heightMapRanges.length; i++) {
                    if (data == 0) {
                        return 10;
                    } else if (data >= heightMapRanges[i][0] && data <= heightMapRanges[i][1]) {
                        return heightMapRanges[i][1] * 2;
                    } else {
                        return 150;
                    }
                }

            }

            return (
                <>
                    <div className="w-[350px] flex justify-between items-baseline absolute bottom-12">
                        {
                            graph.data.map((d: any, i: number) => (
                                <div key={d + i}>
                                    <div
                                        style={{ height: `${calculateHeight(d)}px`, backgroundColor: `${color}`, opacity: d == 0 ? 0.5 : 1 }}
                                        className={`w-5 rounded-lg`}
                                    ></div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-[350px] flex justify-between items-baseline absolute bottom-6">
                        {
                            graph.labels.map((label: string, i: number) => (
                                <div key={label + i} className="text-[14px] text-[#2870ED] font-bold">
                                    {label}
                                </div>
                            ))
                        }
                    </div>
                </>
            );
        } else {
            return (
                <Button sx={{
                    backgroundColor: color,
                    display: 'flex',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    height: '40px',
                    textTransform: 'none',
                    padding: '16px 24px',
                    borderRadius: '8px',
                }}>
                    <span>{buttonText}</span>
                    <img src="/src/assets/images/ButtonArrow.svg" />
                </Button>
            );
        }
    }

    return (
        <div className="w-[439px] h-[439px] p-6 bg-[#F1F5F7] rounded-lg relative">
            {
  
                <>
                    <p className="text-[32px] text-[#212121] font-bold mb-8">{title}</p>
                    <p className="text-[18px] text-[#212121] font-normal mb-[55px]">{info}</p>
                    {renderGraph()}
                </>
            }
        </div>
    )
}

export default DashboardInfoCard;