import { Link } from "react-router-dom";
import moonlight from "../assets/moonlight.svg";
import star from "../assets/star.svg";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-darkBlue text-white"
          : "bg-white text-veryDarkBlue"
      } py-7 shadow-2xl`}
    >
      <div className="mx-7 justify-between flex">
        <div className="navbar-question">
          <Link to="/">
            <h2 className="text-lg font-bold">Where in the world?</h2>
          </Link>
        </div>
        <div
          onClick={toggleTheme}
          className="flex items-center font-semibold cursor-pointer"
        >
          <img
            className="w-5 h-5 mr-2 text-white"
            src={theme === "light" ? star : moonlight}
            // alt={theme}
          />
          <p className="">{theme === "light" ? "Light Mode" : "Dark mode"}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
