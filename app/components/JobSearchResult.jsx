import { getJobs } from "../utils/getJobs";
import JobCard from "./JobCard";

const JobSearchResult = async () => {
  const jobs = await getJobs();
  // console.log(jobs.data[0].id);
  return (
    <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-3xl font-semibold mb-7">
        {jobs.data.length} search result(s) found
      </h2>
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grd-cols-5 gap-6">
        {jobs.data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSearchResult;
