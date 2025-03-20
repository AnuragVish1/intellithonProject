import { Input } from "./ui/input";

const MainPage = () => {
  return (
    <>
      <div className="pr-12 pl-12 pt-15  ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" font-bold text-center text-3xl">
            Search For Tools Suppliers
          </h1>
          <div className=" w-full flex justify-center items-center">
            <Input className=" mt-10 w-[65%] " />
            <button className="bg-[#eee] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-funnel"
              >
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
