import Image from "next/image";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import RegistrationForm from "../components/registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="relative px-[110px] py-[120px] h-auto">
      <Image
        src="/top-color.png"
        className="absolute top-0 left-0 -z-10"
        width={227}
        height={206}
        alt="Gradient"
      />

      <div className="flex w-full bg-[#071400] relative  rounded-xl ">
        <Image
          src="/color.png"
          className="absolute top-[30%] left-[30%]"
          width={405}
          height={368}
          alt="Gradient"
        />
        <div className="w-full flex flex-col items-center justify-center py-13">
          <RegistrationForm />
          <div className="flex items-center justify-center space-x-2 my-10">
            <span className="h-px w-20 bg-[#4B4B4B]"></span>
            <span className="text-white font-normal">or</span>
            <span className="h-px w-20 bg-[#4B4B4B]"></span>
          </div>
          <div className="flex flex-row gap-4 text-2xl ">
            <div className="w-[120px] h-[60px] bg-[#1E1E1E] text-white items-center justify-center flex rounded-full cursor-pointer transition duration-500 hover:bg-primary">
              <FaFacebookF />
            </div>
            <div className="w-[120px] h-[60px] bg-[#1E1E1E] text-white items-center justify-center flex rounded-full cursor-pointer transition duration-500 hover:bg-primary">
              <FaApple />
            </div>
            <div className="w-[120px] h-[60px] bg-[#1E1E1E] text-white items-center justify-center flex rounded-full cursor-pointer transition duration-500 hover:bg-primary">
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="w-full relative hidden md:inline-block p-20">
          <div className="relative w-fit">
            <Image
              className=" w-full h-auto "
              width={646}
              height={500}
              src="/auth-image.png"
              alt="Image"
            />
            <button className="text-primary text-[44px] w-[66px] h-[66px] absolute right-0 top-0 bg-[#1b1b1b] border border-[#4b4b4b] flex items-center cursor-pointer justify-center rounded-full ">
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
