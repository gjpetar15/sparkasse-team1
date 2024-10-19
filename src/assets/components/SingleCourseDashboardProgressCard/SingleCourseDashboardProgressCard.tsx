
const SingleCourseDashboardProgressCard = (props: any) => {
    const { course } = props;
    return (
        <div>
            <p className="text-2xl font-medium mb-6">Продолжи каде што застана:</p>
            <div className="w-full bg-white rounded-lg p-6">
                <div className="flex items-center">
                    <div className="w-7 h-7 me-4 bg-[#A2B6C9] rounded-full flex items-center justify-center">
                        <img src="/src/assets/images/Checkmark.svg" />
                    </div>
                    <span>{course.name}</span>
                </div>
                <p className="text-base mt-4">{course.short_description}</p>
            </div>
        </div>
    );
};

export default SingleCourseDashboardProgressCard;
