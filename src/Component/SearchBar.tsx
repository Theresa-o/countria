import { useContext } from "react";
import search from "../assets/search.svg";
import { ThemeContext } from "../context/ThemeProvider";

interface SearchBarState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarState) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-darkBlue text-white"
          : "bg-white text-veryDarkBlue"
      } mt-5`}
    >
      <div
        className={`${
          theme === "dark"
            ? "bg-darkBlue !ßtext-white"
            : "bg-white text-veryDarkBlue"
        } relative h-12 w-2/6 rounded px-10 shadow-black`}
      >
        <img
          className="w-4 h-4 mr-6 absolute top-4"
          src={search}
          alt="Search icon"
        />
        <input
          className={`${
            theme === "dark"
              ? "bg-darkBlue text-white"
              : "bg-white text-veryDarkBlue"
          } font-sm p-3 pl-6 outline-none`}
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
