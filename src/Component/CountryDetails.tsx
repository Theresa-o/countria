import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const CountryDetails = () => {
  const { name } = useParams();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { data, error, isPending } = useQuery({
    queryKey: ["country", name],
    queryFn: () =>
      fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) =>
        res.json()
      ),
    staleTime: 1000 * 60 * 10,
  });

  const navigate = useNavigate();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.length) {
    return <div>No data available</div>;
  }

  const {
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    name: countryName,
  } = data[0];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-veryDarkBlue text-white min-h-screen"
          : "bg-veryLightGray text-veryDarkBlue min-h-screen"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="my-10 mx-7">
        <button
          className={`${
            theme === "dark"
              ? "bg-darkBlue text-white bg-border-black-300"
              : "bg-border-gray-300"
          } rounded border-1 shadow-lg  px-4 py-1 flex items-center gap-3`}
          onClick={() => navigate(-1)}
        >
          <svg
            className="h-5 w-5 fill-current"
            fill={theme === "dark" ? "white" : "black"}
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.213 476.213"
            xmlSpace="preserve"
          >
            <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon>
          </svg>
          Back
        </button>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-14 mx-7">
        <div>
          <img src={flags.svg} alt={flags.alt} />
        </div>
        <div className="mt-20">
          <h4 className="mb-6 font-bold">{countryName.common}</h4>
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <p className="font-semibold mr-1">
                Native Name: {countryName.nativeName.official}
              </p>
              <p className="font-semibold mr-1">
                Population: <span>{population}</span>
              </p>
              <p className="font-semibold mr-1">Region: {region}</p>
              <p className="font-semibold mr-1">Sub region: {subregion}</p>
              <p className="font-semibold mr-1">Capital: {capital}</p>
            </div>
            <div className="">
              <p className="font-semibold mr-1">Top Level Domain: {tld}</p>
              <p className="font-semibold mr-1">
                Currencies:{" "}
                {Object.values(currencies)
                  .map((currency: any) => currency.name)
                  .join(", ")}
              </p>
              <p className="font-semibold mr-1">
                Languages:{" "}
                {Object.values(languages)
                  .map((languages: any) => languages)
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-2">
            <p className="font-semibold mr-1">Bearer Countries:</p>
            <div className="flex flex-wrap">
              {" "}
              {borders &&
                borders.map((border: any, index: number) => (
                  <button
                    key={index}
                    className={`${
                      theme === "dark"
                        ? "bg-darkBlue text-white bg-border-black-300"
                        : "bg-border-gray-300"
                    } rounded border-gray-300 border-1 shadow-md px-6 py-1 mr-2 mb-2`}
                  >
                    {border}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
