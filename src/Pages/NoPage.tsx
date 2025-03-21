import NavBar from "@/components/Navbar"

const NoPage = () =>
{
    return(
        <>
        <NavBar/>
            <div className=" flex h-[40.8rem] justify-center items-center bg-custom-50 flex-col">
                <h1 className=' text-[8rem] font-bold'>404</h1>
                <p>Page not found</p>
            </div>
        </>
    )
}

export default NoPage