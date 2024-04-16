// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

interface CountryFilterProps {
  filterParam: string;
  setFilterParam: (param: string) => void;
}

const Filter = ({ filterParam, setFilterParam }: CountryFilterProps) => {
  // const [open, setOpen] = useState(false);
  // const [selectedRegion, setSelectedRegion] = useState("");
  // const [iconDirection, setIconDirection] = useState("down");

  // const [filterParam, setFilterParam] = useState("All");

  // const {  data } = useQuery({
  //   queryKey: ["region", selectedRegion],

  //   queryFn: () =>
  //     fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`).then(
  //       (res) => res.json()
  //     ),
  // });

  // const toggleDropdown = () => {
  //   setOpen(!open);
  //   setIconDirection(open ? "down" : "up");
  // };

  // const handleItemClick = (item: string) => {
  //   setSelectedRegion(item);
  // };

  // const handleRegionChange = (event: any) => {
  //   setSelectedRegion(event.target.value);
  // };

  // useEffect(() => {
  //   if (data) {
  //     setSelectedRegion(data);
  //     console.log("Selected Region:", selectedRegion);
  //   }
  // }, [selectedRegion]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterParam(event.target.value);
  };

  return (
    <div className=" mt-5">
      <div className="relative flex w-full items-center px-3 py-2 text-md hover:bg-gray-100">
        <select
          value={filterParam}
          onChange={handleFilterChange}
          className="custom-select  py-2 pl-3 pr-8 rounded-lg shadow-md focus:outline-none "
          aria-label="Filter Countries By Region"
          style={{ backgroundColor: "white" }}
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="MiddleEast">Middle East</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
