const NavBar = () => {
    return(
        <>
            <nav className=" flex justify-between p-4 items-center border-1 pr-12 pl-12">
                <div className=" font-bold text-[1.2rem] ">
                    Logo
                </div>
                <div className=" flex gap-4">
                    <p className=" bg-black rounded-full h-auto text-white pr-1.5 pl-1.5 text-[15px]">2</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
            </nav>
        </>
    )
}

export default NavBar