import axios from "axios";
import type { Job } from "../types";


export const fetchJobs = async (): Promise<Job[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // map mock API to Job type
  return res.data.slice(0, 20).map((job: any) => ({
    id: job.id,
    title: job.title,
    company: `Company ${job.id}`,
    location: "Remote",
  }));
};
