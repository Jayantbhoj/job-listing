import React from "react";
import { useJobs } from "../context/JobContext";

interface Props {
  isPreview?: boolean;
  onOpen?: () => void;
  onBack?: () => void;
}

const SavedJobsPage: React.FC<Props> = ({ isPreview, onOpen, onBack }) => {
  const { state, dispatch } = useJobs();

  return (
    <div
      className={
        isPreview
          ? "bg-gray-50 p-4 rounded-md shadow-md"
          : "max-w-6xl mx-auto p-4"
      }
    >
      {!isPreview && (
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back
        </button>
      )}

      {/* Always render header */}
      <h2 className="text-lg font-semibold mb-3">Saved Jobs</h2>

      {state.savedJobs.length === 0 ? (
        <div className="p-4 bg-gray-50 rounded-md shadow-md text-center text-gray-600">
          No saved jobs
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {state.savedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border p-3 rounded-md flex justify-between items-center shadow-sm"
            >
              <div>
                <h3 className="font-bold">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company}</p>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_JOB", payload: job.id })
                }
                className="text-red-500 hover:text-red-700 ml-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Show "View all" only in preview mode */}
      {isPreview && state.savedJobs.length > 0 && onOpen && (
        <button
          onClick={onOpen}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          View All Saved Jobs
        </button>
      )}
    </div>
  );
};

export default SavedJobsPage;
