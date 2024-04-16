import search from "../assets/search.svg";

interface SearchBarState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarState) => {
  return (
    <div className="bg-white mt-5">
      <div className="relative h-14 w-2/6 rounded px-8 shadow-black">
        <img
          className="w-4 h-4 mr-2 absolute top-4"
          src={search}
          alt="Search icon"
        />
        <input
          className="font-sm p-3 pl-6 outline-none"
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
