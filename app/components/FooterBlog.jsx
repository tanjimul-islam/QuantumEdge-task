import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const FooterBlog = () => {
  return (
    <div className="bg-dark px-6 md:px-16 lg:px-24 xl:px-32 flex justify-around py-4">
      <div className="flex flex-row gap-3">
        <div className="w-10 h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center hover:text-white cursor-pointer hover:bg-primary transition duration-500 ">
          <FaFacebookF />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center hover:text-white cursor-pointer hover:bg-primary transition duration-500 ">
          <FaInstagram />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center hover:text-white cursor-pointer hover:bg-primary transition duration-500 ">
          <FaXTwitter />
        </div>
      </div>
      <div className="">
        <h2 className="test-[18px] font-bold text-white mb-5">
          Our Popular Post
        </h2>
        <div className="flex flex-row max-w-xl">
          <div className="mr-11">
            <div className="single-blog flex flex-row gap-4 justify-center items-center">
              <Image
                src="/footer-blog.png"
                width={106}
                height={72}
                alt="Image"
              />
              <div>
                <p className="text-[#CCC]">November 7, 2024</p>
                <h4 className="text-white font-[14px font-semibold">
                  Unveils the Best Canadian Cities for Biking
                </h4>
              </div>
            </div>
          </div>
          <div className="mr-11">
            <div className="single-blog flex flex-row gap-4 justify-center items-center">
              <Image
                src="/footer-blog.png"
                width={106}
                height={72}
                alt="Blog Img"
              />
              <div>
                <p className="text-[#CCC]">November 7, 2024</p>
                <h4 className="text-white font-[14px font-semibold">
                  Unveils the Best Canadian Cities for Biking
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlog;
