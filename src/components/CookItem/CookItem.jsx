
const CookItem = ({cookItem,handlePrepareButton,index}) => {
    const{Recipe_Name,Preparing_Time,Calories}= cookItem
    return (
        <div className="flex items-center px-4 py-2 bg-neutral-200 gap-3">
            <p>{index+1}</p>
            <div className="w-[30%]">{Recipe_Name}</div>
            <div className="w-[20%]">{Preparing_Time} min</div>
            <div className="w-[25%]">{Calories} Calories</div>
            <div className="w-[25%]">
                <button onClick={() => handlePrepareButton(cookItem)} className="bg-green-400 border-2 px-3 py-2 rounded-full">Preparing</button>
            </div>
        </div>
    );
};

export default CookItem;
