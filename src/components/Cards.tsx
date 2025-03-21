
export interface ImageUrlProp{
    url: string
}

const Cards = ({url}: ImageUrlProp) => {
    console.log(url)
  return (
    <>
      <div className="h-[15.5rem] w-full border-2 flex rounded-2xl p-3 gap-5 bg-[#f0dbdb]">
        <div className=" w-[28rem]  flex justify-center items-center">
          <img src={url} alt="" className=" object-cover h-full rounded-[0.5rem]" />

        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <h1 className=" text-2xl">Company 1</h1>
            <p className="text-[1.1rem] pt-2 pb-1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words{" "}
            </p>
            <div className="text-muted-foreground pt-2 text-[16px] flex gap-1  items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              4.9
            </div>
          </div>
          <div className=" text-[1.5rem] font-semibold pt-2">$200</div>
          <div className=" flex items-end">
            <button className="border-2 p-2 rounded-md">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
