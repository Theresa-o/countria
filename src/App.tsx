import Navbar from "./Component/Navbar";
import MainList from "./Component/MainList";
import { ThemeContext } from "./context/ThemeProvider";
import { useContext } from "react";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id={theme || ""}
      className={` bg-${
        theme === "dark" ? "black min-h-screen" : "veryLightGray min-h-screen"
      } text-${theme === "dark" ? "white" : "veryDarkBlue"}`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <MainList theme={theme} />
    </div>
  );
}

export default App;
