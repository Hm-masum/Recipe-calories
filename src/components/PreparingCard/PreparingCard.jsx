import { useState } from "react";
import PreparingItem from "../PreparingItem/PreparingItem";


const PreparingCard = ({preparingCard,numOfPrepareItem,totalTime,totalCalories}) => {

    return (
        <div className="my-5">
            <h4 className="text-center text-2xl font-semibold">Currently cooking:{numOfPrepareItem}</h4>
            <div className="my-3 flex px-4">
                <p className="w-[5%]"></p>
                <p className="w-[40%]">Name</p>
                <p className="w-[25%]">Time</p>
                <p className="w-[30%]">Calories</p>
            </div>
            <div>
                {
                    preparingCard.map((preparingItem,index)=><PreparingItem key={index} index={index} preparingItem={preparingItem}></PreparingItem>)
                }
            </div>
            <div className="flex font-semibold pr-3 my-3">
                <div className="w-[40%]"></div>
                <div className="w-[30%]">Total Time <br/> = {totalTime} min</div>
                <div className="w-[30%]">Total Calories = {totalCalories} Calories</div>
            </div>
        </div>
    );
};

export default PreparingCard;