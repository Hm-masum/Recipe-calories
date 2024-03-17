
const Banner = () => {
    return (
        <div>
           <div style={{backgroundImage: 'url(https://i.ibb.co/3ktNCGc/Rectangle-1.png)'}} className="h-[60vh] lg:h-[80vh] my-6 bg-[url('./images/Rectangle 1.png')] bg-cover bg-center rounded-2xl flex items-center border-2">
                <div className="text-white px-6 space-y-6">
                    <h1 className="lg:w-[75%] mx-auto text-center text-2xl lg:text-5xl lg:font-bold ">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="lg:w-[75%] mx-auto text-center">Explore Exceptional Cooking Classes, Crafted Just for You! Elevate your culinary skills and savor the joy of creating delicious masterpieces in your own kitchen.</p>
                    <div className="flex gap-5 justify-center">
                       <button className="px-5 py-3  bg-green-400 rounded-full text-black font-semibold">Explore Now</button>
                       <button className="px-5 py-3 rounded-full border-2 font-semibold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
