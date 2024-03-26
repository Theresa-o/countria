// import React from 'react'
import { useEffect, useState } from "react";
import search from "../assets/search.svg";
import { useQuery } from "@tanstack/react-query";

// interface SearchBarState {
//     searchItem: string;
//   }

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  });

  const handleSearch = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredResults = searchResults.filter((result) =>
      result.name.includes(query)
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, []);

  return (
    <div className="bg-white mt-2">
      <div className="relative h-14 w-2/6 rounded px-8 shadow-black">
        <img
          className="w-4 h-4 mr-2 absolute top-4"
          src={search}
          alt="Search icon"
        />
        <input
          className="font-sm p-3 pl-6"
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
