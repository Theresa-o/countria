import Navbar from "./Component/Navbar";
import MainList from "./Component/MainList";

function App() {
  return (
    <>
      <div className="darkBlue">
        <Navbar />
        <ul>
          <MainList />
        </ul>
      </div>
    </>
  );
}

export default App;
