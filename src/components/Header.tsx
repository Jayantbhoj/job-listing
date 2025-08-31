import React from "react";
import SearchBar from "./SearchBar";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const Header: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <h1 className="text-blue-600 text-2xl font-bold">Job Listing Board</h1>
        <div className="w-full md:w-1/3 mt-3 md:mt-0">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
