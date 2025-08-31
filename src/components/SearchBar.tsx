import React, { useState, useEffect } from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => setSearch(value), 300);
    return () => clearTimeout(timeout);
  }, [value, setSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by title or company..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
    </div>
  );
};

export default SearchBar;
