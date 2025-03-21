import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [itemsCount, setItemsCount] = useState(0);
    

    return(
        <>
            <nav className=" flex justify-between p-4 items-center border-1 pr-12 pl-12 bg-custom-50">
                <div className=" font-bold text-[1.2rem] ">
                    Logo
                </div>
                <Link to="/details"><div className=" flex gap-1 justify-center items-center font-semibold bg-custom-500 text-white p-2 rounded-md cursor-pointer border-1">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg> <p>Archive</p>
                </div>
                </Link>
            </nav>
        </>
    )
}

export default NavBar