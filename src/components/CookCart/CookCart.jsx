import CookItem from "../CookItem/CookItem";

const CookCart = ({cookCart,numOfCookItem,handlePrepareButton}) => {
    return (
        <div className="my-3 space-y-3">
            <h2 className="text-center text-2xl font-semibold">Want to cook: {numOfCookItem}</h2>

            <div className="flex p-4">
                <p className="w-[5%]"></p>
                <p className="w-[25%]">Name</p>
                <p className="w-[20%]">Time</p>
                <p className="w-[25%]">Calories</p>
                <p className="opacity-0 w-[25%]">button</p>
            </div>
            <div>
                {
                    cookCart.map((cookItem,index)=> <CookItem key={index} index={index} cookItem={cookItem} handlePrepareButton={handlePrepareButton}></CookItem>)
                }
            </div>
    


        </div>
    );
};

export default CookCart;