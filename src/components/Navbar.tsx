import { useState } from "react";

const NavBar = () => {

    const [itemsCount, setItemsCount] = useState(0);

    return(
        <>
            <nav className=" flex justify-between p-4 items-center border-1 pr-12 pl-12">
                <div className=" font-bold text-[1.2rem] ">
                    Logo
                </div>
                <div className="">
                    <span className=" absolute w-4 h-4 bg-black text-white flex items-center justify-center rounded-full text-[12px] -mt-1.5 ml-4 ">{itemsCount}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
            </nav>
        </>
    )
}

export default NavBar