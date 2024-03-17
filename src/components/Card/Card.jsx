const Card = ({card,handleCookButton}) => {
    const {Recipe_Name,Description,Ingredients,Preparing_Time,Calories,Recipe_Image} = card

    return (
        <div className="p-4 border-2 rounded-2xl flex flex-col space-y-3">
            <img className="h-[220px] rounded-2xl" src={Recipe_Image} alt="" />
            <h1 className="lg:text-xl font-semibold">{Recipe_Name}</h1>
            <p>{Description}</p>
            
            <span className="border-gray-200 border-t-2"></span>

            <h1 className="font-semibold">Ingredients:4</h1>
            <ul className="pl-4">
                <li className="list-disc">{Ingredients[0]}</li>
                <li className="list-disc">{Ingredients[1]}</li>
                <li className="list-disc">{Ingredients[2]}</li>
                <li className="list-disc">{Ingredients[3]}</li>
            </ul>

            <span className="border-gray-200 border-t-2"></span>

            <div className="flex gap-6">
                <div className="flex gap-2">
                    <img src="../src/assets/images/Frame (2).png" alt="" />
                    <p>{Preparing_Time}</p>
                </div>
                <div className="flex gap-2">
                    <img src="../src/assets/images/Frame (1).png" alt="" />
                    <p>{Calories}</p>
                </div>
            </div>

            <button onClick={() => handleCookButton(card)} className="bg-green-400 px-4 py-3 rounded-full font-semibold lg:w-1/2">Want to Cook</button>
        </div>
    );
};

export default Card;