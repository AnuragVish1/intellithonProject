import { useEffect, useState } from "react";
import Results from "./Results";
import { Input } from "./ui/input";
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
  const apiEndPoint = "https://picsum.photos/v2/list?limit=10";
  useEffect(() => {
    fetch(apiEndPoint)
      .then((response) => response.json())
      .then((json) => {
        setImageUrl(json)
        console.log(json)
      });
  }, []);

  return (
    <>
      <div className="pr-12 pl-12 pt-22 h-auto flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-between h-[8rem] w-[65%] items-center">
          <h1 className=" font-bold text-center text-4xl font-sans">
            Products
                      </h1>
          <div className=" w-full flex justify-center items-center gap-2">
            <Input
              placeholder="Search By.."
              className=" drop-shadow-md text-2xl"
            />
          </div>
        </div>
        <Results data={imageUrl}/>
      </div>
    </>
  );
};

export default MainPage;
