import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'>
        <span className='bg-[#406ec9]'>Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-5 gap-4 my-5">
        {randomJobs.slice(0,9).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
