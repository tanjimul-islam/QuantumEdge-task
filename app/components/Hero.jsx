import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const SearchBarUI = () => {
  return (
    <div className="relative flex items-center justify-start p-4 bg-dark py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center space-x-4 bg-[#1F2B19] p-2 rounded-lg shadow-lg ">
        <input
          type="text"
          placeholder="Search your needs"
          className="bg-transparent text-white placeholder-gray-400 border border-transparent focus:border-green-500 focus:outline-none p-2 rounded-lg w-64"
        />
        <div className="relative">
          <select
            className="appearance-none bg-transparent text-white pr-8 pl-2 py-2 rounded-lg cursor-pointer border border-transparent focus:border-green-500 focus:outline-none"
            defaultValue="Web Developer"
          >
            <option className="bg-[#1F2B19] text-white" value="Web Developer">
              Web Developer
            </option>
            <option
              className="bg-[#1F2B19] text-white"
              value="Mobile Developer"
            >
              Mobile Developer
            </option>
            <option className="bg-[#1F2B19] text-white" value="UI/UX Designer">
              UI/UX Designer
            </option>
            <option className="bg-[#1F2B19] text-white" value="Data Scientist">
              Data Scientist
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <IoIosArrowDown color="white" />
          </div>
        </div>
        <button className="bg-primary hover:bg-primary p-3 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:primary contain-paint ">
          <FaSearch color="white" />
        </button>
      </div>
      <button className="ml-4 bg-primary hover:bg-primary text-white font-semibold py-4 px-6 rounded-full shadow-md focus:outline-none focus:primary focus:primary cursor-pointer">
        Advanced search
      </button>
      <Image
        src="/hero-star.png"
        width={111}
        height={111}
        alt="Hero Star"
        className="absolute right-[15%] bottom-[25px]"
      />
    </div>
  );
};

export default SearchBarUI;
