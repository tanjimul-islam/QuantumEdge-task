import Link from "next/link";

const FooterAbout = () => {
  return (
    <div className="text-white border-r border-r-[#CCC]/20">
      <div className="px-20">
        <h3 className="text-xl mb-6 font-bold">About</h3>
        <ul className="flex flex-col gap-3 ">
          <li>
            <Link href="">About Us</Link>
          </li>
          <li>
            <Link href="">Become Seller</Link>
          </li>
          <li>
            <Link href="">ProProJobs on Myproworker</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterAbout;
