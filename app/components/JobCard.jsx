import Link from "next/link";
import { FaBriefcase, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const JobCard = ({ job }) => {
  const isoDate = job.created_at;
  const date = new Date(isoDate);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const visibleSkills = job.skills.slice(0, 3);
  const remainingSkills = job.skills.length - 3;

  return (
    <div className="rounded-xl transition duration-500 hover:shadow-[0px_4px_65.8px_rgba(0,0,0,0.25)] bg-white p-6  max-w-md ">
      <div className="border-b border-b-[#CCC]/30 ">
        <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>
        <h3 className="text-xl font-semibold text-header mb-6">
          <Link href={`/`}>{job.title}</Link>
        </h3>

        <div className="flex items-center justify-between mb-5 bg-[#F5F5F5] px-6 py-3 rounded-md ">
          <span className="text-sm text-[#888]">{job.budget_type}</span>
          <span className="text-sm font-semibold text-header">
            ${job.rate_from}–${job.rate_to}
          </span>
        </div>

        <p className="text-sm text-[#4B4B4B] mb-10">
          In this role, you will be responsible for conducting comprehensive SEO
          audits and implementing strategies to optimize websites...
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-xs bg-purple-100 text-[#9747FF] px-2 py-1 rounded-full flex flex-row items-center justify-center gap-1">
            <FaLocationDot />
            <span>Remote</span>
          </span>
          <span className="text-xs bg-red-100 text-[#DB3131] px-2 py-1 rounded-full flex flex-row items-center justify-center gap-1">
            <FaBriefcase />

            <span>Senior level</span>
          </span>
          <span className="text-xs bg-green-100 text-[#05AF2B] px-2 py-1 rounded-full flex flex-row items-center justify-center gap-1">
            <FaUsers />2 Freelancer
          </span>
        </div>

        <div className="flex flex-wrap gap-2 text-[14px] font-semibold text-[#1E1E1E] mb-4">
          {visibleSkills.map((skill, index) => (
            <span key={skill.id} className="bg-gray-100 px-2 py-1 rounded">
              {skill.label}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="bg-gray-100 px-2 py-1 rounded">
              +{remainingSkills} more
            </span>
          )}
        </div>
      </div>

      <p className=" text-[#CCC] my-5">
        Posted by{" "}
        <span className="font-bold text-[#4B4B4B]">
          <a href="">Eamman Olio</a>
        </span>
      </p>

      <button className="mt-auto bg-black text-white px-6 py-3 text-sm rounded-full hover:bg-primary cursor-pointer transition duration-500">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
