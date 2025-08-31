import React, { createContext, useReducer, useContext } from "react";
import type { ReactNode } from "react";
import type { Job } from "../types";


interface JobState {
  savedJobs: Job[];
}

type Action =
  | { type: "SAVE_JOB"; payload: Job }
  | { type: "REMOVE_JOB"; payload: number };

const initialState: JobState = {
  savedJobs: [],
};

function jobReducer(state: JobState, action: Action): JobState {
  switch (action.type) {
    case "SAVE_JOB":
      if (state.savedJobs.find((job) => job.id === action.payload.id)) return state;
      return { ...state, savedJobs: [...state.savedJobs, action.payload] };
    case "REMOVE_JOB":
      return { ...state, savedJobs: state.savedJobs.filter(job => job.id !== action.payload) };
    default:
      return state;
  }
}

const JobContext = createContext<{
  state: JobState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
