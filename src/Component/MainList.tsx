import { useState } from "react";
import CountryCards from "./CountryCards";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

interface ColourModeProps {
  theme: string | null;
}

const MainList = ({ theme }: ColourModeProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParam, setFilterParam] = useState("All");

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-veryDarkBlue text-white"
          : "bg-veryLightGray text-veryDarkBlue"
      }`}
    >
      <div className="mx-4 flex justify-start flex-col md:flex-row md:justify-between md:mx-6 md:w-[768]">
        <div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="flex flex-start mt-4 md:mt-0">
          <Filter filterParam={filterParam} setFilterParam={setFilterParam} />
        </div>
      </div>
      <div>
        <CountryCards searchQuery={searchQuery} filterParam={filterParam} />
      </div>
    </div>
  );
};

export default MainList;
