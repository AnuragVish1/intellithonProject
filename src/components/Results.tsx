import Cards from "./Cards";

export interface Props {
    id: number
    author: string
    width: number
    height: number
    url: string
    download_url:string
}
const Results = ({data}: {data: Props[]}) => {
  return (
    <>
      <div className="  w-[65%] flex flex-col gap-10 justify-center items-center mt-20 h-auto ">
        {data.map((ImageData) => (
          <Cards url={ImageData.download_url} key={ImageData.id} />
        ))}
      </div>
    </>
  );
};
export default Results;
