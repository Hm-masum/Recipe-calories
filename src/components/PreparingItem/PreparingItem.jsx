
const PreparingItem = ({preparingItem,index}) => {
    const{Preparing_Time,Recipe_Name,Calories}=preparingItem;
    return (
        <div>
            <div className="px-4 py-5 flex items-center bg-gray-200 gap-2">
                <p className="w-[5%]">{index+1}</p>
                <p className="w-[40%]">{Recipe_Name}</p>
                <p className="w-[25%]">{Preparing_Time} min</p>
                <p className="w-[30%]">{Calories} Calories</p>
            </div>
        </div>
    );
};

export default PreparingItem;