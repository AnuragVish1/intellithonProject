import { useEffect, useState } from "react";
import Results from "../components/Results";
import { Input } from "../components/ui/input";
import NavBar from "../components/Navbar";
import { error } from "console";
export interface ImageProps {
  id: number
  author: string
  width: number
  height: number
  url: string
  download_url:string
}

const MainPage = () => {
  const [imageUrl, setImageUrl] = useState<ImageProps[]>([])
  const [isLoading, setIsLoading] = useState(Boolean)
  const apiEndPoint = "https://picsum.photos/v2/list?limit=10";
  useEffect(() => {
    setIsLoading(true)
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        setImageUrl(json)
        console.log(json) 
      })
      
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, []);

  return (
    <>
    <NavBar />
      <div className="pr-12 pl-12 pt-22 h-auto flex flex-col justify-center bg-custom-50 items-center">
        <div className={`flex flex-col justify-between ${isLoading ? 'max-h-[8rem]' : 'max-h-0'}  w-[65%] items-center transition-all ease duration-100`}>
          <h1 className={`font-bold text-center text-4xl ${isLoading == false ? ' hidden' : 'visible'} pb-5 transition-all ease duration-1000 font-Inter`}>
            Search For Suppliers
                      </h1>
          <div className=" w-full flex justify-center items-center gap-2 transition-all ease">
            <Input
              placeholder="Search By.."
              className=" drop-shadow-md text-2xl bg-[#fafafa] focus-visible:ring-custom-500"
            />
          </div>
        </div>
        <Results data={imageUrl}/>
      </div>
    </>
  );
};

export default MainPage;
