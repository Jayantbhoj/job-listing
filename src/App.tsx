import React, { useEffect, useState, useMemo } from "react";
import { JobProvider } from "./context/JobContext";
import { fetchJobs } from "./services/jobService";
import type { Job } from "./types";
import JobCard from "./components/JobCard";
import Header from "./components/Header";
import SavedJobsPage from "./components/SavedJobsPage";

const AppContent: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSavedJobsPage, setShowSavedJobsPage] = useState(false);

  useEffect(() => {
    fetchJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredJobs = useMemo(
    () =>
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
      ),
    [jobs, search]
  );

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  if (showSavedJobsPage) {
    return <SavedJobsPage onBack={() => setShowSavedJobsPage(false)} />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header search={search} setSearch={setSearch} />

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Jobs Section */}
        <section className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Job Listings</h2>
            <button
              onClick={() => setShowSavedJobsPage(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Saved Jobs
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

const App: React.FC = () => (
  <JobProvider>
    <AppContent />
  </JobProvider>
);

export default App;
