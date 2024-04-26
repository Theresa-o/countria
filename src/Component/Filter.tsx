import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

interface CountryFilterProps {
  filterParam: string;
  setFilterParam: (param: string) => void;
}

const Filter = ({ filterParam, setFilterParam }: CountryFilterProps) => {
  const { theme } = useContext(ThemeContext);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterParam(event.target.value);
  };

  return (
    <div className="mt-5">
      <div className="relative flex w-full items-center px-3 py-2 text-md hover:bg-gray-100">
        <select
          value={filterParam}
          onChange={handleFilterChange}
          className={`${
            theme === "dark"
              ? "bg-darkBlue text-white"
              : "bg-white text-veryDarkBlue"
          }  px-3 py-2 pl-3 pr-8 rounded-lg shadow-md focus:outline-none`}
          aria-label="Filter Countries By Region"
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
