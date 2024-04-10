import { useState } from "react";
import CountryCards from "./CountryCards";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const MainList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-veryLightGray">
      <div className="mx-4 flex justify-start flex-col md:flex-row md:justify-between md:mx-6 md:w-[768]">
        <div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="flex flex-start mt-4 md:mt-0">
          <Filter />
        </div>
      </div>
      <div>
        <CountryCards searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default MainList;
