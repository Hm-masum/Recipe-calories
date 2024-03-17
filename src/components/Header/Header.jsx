
const Header = () => {
    return (
        <div>
            <section>
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-xl lg:text-3xl font-bold">Recipe Calories</h6>
                </div>

                <div className='navItem'>
                     <ul className='flex gap-5 text-xl'>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                     </ul>
                </div>
                 
                <div className='flex items-center gap-3'>
                    <label className="input input-bordered rounded-full border-2 flex items-center gap-2 bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       <input type="text" className="grow bg-gray-100 py-2 rounded-full" placeholder="Search" />
                     </label>
                    <img src="../src/assets/images/frame.png" className='bg-green-400 rounded-full' alt="" />
                </div>
               
            </div>
      </section>
        </div>
    );
};

export default Header;