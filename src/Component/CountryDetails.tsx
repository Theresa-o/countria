import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import backicon from "../assets/backicon.svg";
import { useQuery } from "@tanstack/react-query";

const CountryDetails = () => {
  const { name } = useParams();
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
    <div>
      <Navbar />
      <div className="my-10 mx-7 ">
        <button
          className="rounded border-gray-300 border-1 shadow-md  px-6 py-1 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <img className="h-5 w-5 " src={backicon} alt="Go back" />
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
                    className="rounded border-gray-300 border-1 shadow-md px-6 py-1 mr-2 mb-2"
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
