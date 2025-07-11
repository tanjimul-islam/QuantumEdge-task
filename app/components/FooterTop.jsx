const FooterTop = () => {
  return (
    <div className="bg-dark px-6 md:px-16 lg:px-24 xl:px-32 flex text-white justify-around pt-10 pb-14 border-b border-b-[#CCC]/20">
      <div className="">
        <h1 className="text-3xl font-bold mr-20">
          Reach Your Requirement Goals Right on Schedule
        </h1>
      </div>
      <div className="w-xl">
        <p className="text-[#CCC] leading-7">
          Sign up, complete your profile, and start browsing projects. Submit
          proposals and communicate with clients to get hired.
        </p>
        <button className="bg-primary rounded-full px-5 py-2 mt-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FooterTop;
