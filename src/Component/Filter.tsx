import { useState } from "react";

// Define an interface for the state
// interface FilterState {
//     open: boolean;
//     selectedItem: string;
//     iconDirection: 'up' | 'down';
// }

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [iconDirection, setIconDirection] = useState("down");
  // const [RegionList, setRegionList] = useState([])

  // const getRegions = async

  // // const filterbyRegion =

  // // get the region list
  // const { data } = useQuery({
  //     queryKey: ["countries"],
  //     queryFn: () =>
  //     fetch(`https://restcountries.com/v3.1/region/{region}`).then((res) =>res.json().then(data => setRegion(data)))
  // })

  const toggleDropdown = () => {
    setOpen(!open);
    setIconDirection(open ? "down" : "up");
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="relative bg-white">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-2 rounded-md border-none my-2"
        >
          <span className="pr-2">Dropdown Button</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 transition-transform transform ${
              iconDirection === "up" ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`M19 9l-7 7-7-7`}
            />
          </svg>
        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 bg-white rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <li
            className={`flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 ${
              selectedItem === "Dropdown List 1" ? "bg-darkBlue" : ""
            }`}
            onClick={() => handleItemClick("Dropdown List 1")}
          >
            Dropdown List 1
          </li>
          <li
            className={`flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 ${
              selectedItem === "Dropdown List 2" ? "bg-darkBlue" : ""
            }`}
            onClick={() => handleItemClick("Dropdown List 2")}
          >
            Dropdown List 2
          </li>
          <li
            className={`flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 ${
              selectedItem === "Dropdown List 3" ? "bg-darkBlue" : ""
            }`}
            onClick={() => handleItemClick("Dropdown List 3")}
          >
            Dropdown List 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
