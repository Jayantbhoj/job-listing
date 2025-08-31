import React from "react";
import type { Job } from "../types";
import { useJobs } from "../context/JobContext";

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  const { dispatch } = useJobs();

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-500 text-sm">{job.location}</p>
      </div>
      <button
        onClick={() => dispatch({ type: "SAVE_JOB", payload: job })}
        className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition"
      >
        Save Job
      </button>
    </div>
  );
};

export default JobCard;
