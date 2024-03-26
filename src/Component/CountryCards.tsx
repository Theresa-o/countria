import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export interface CountryProps {
  altSpellings?: string[] | null;
  area: number;
  borders?: string[] | null;
  capital?: string[] | null;
  continents?: string[] | null;
  currencies: Currencies;
  independent: boolean;
  landlocked: boolean;
  languages: Languages;
  flag: string;
  flags: Flags;
  name: Name;
  population: number;
  region: string;
  timezones?: string[] | null;
}
export interface Currencies {
  EUR: EUR;
}
export interface EUR {
  name: string;
  symbol: string;
}
export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
export interface Languages {
  cat: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Name {
  common: string;
  official: string;
}

const CountryCards = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  });

  return (
    <div className="my-5 ">
      {isPending && <div className="text-xl font-medium">Loading posts...</div>}
      {error && <div className="text-red-700">{error.message}</div>}
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-4 ">
        {data &&
          data.map(
            (
              { flags, population, region, name, capital }: CountryProps,
              index: number
            ) => (
              <Link
                key={index}
                to={`/country/${name.common}`}
                className="w-full md:w-1/2 lg:w-1/4 mb-10"
              >
                <div>
                  <img
                    src={flags.svg}
                    alt={flags.alt}
                    className="w-full object-cover h-[200px]"
                  />
                </div>
                <div className="shadow-lg h-2/4 pl-5 pt-5">
                  <h1 className="font-bold">{name.common}</h1>
                  <div className="mt-3">
                    <div className="flex">
                      <p className="font-semibold mr-1">Population: </p>
                      <span>{population}</span>
                    </div>
                    <div className="flex">
                      <p className="font-semibold mr-1">Region: </p>
                      <span>{region}</span>
                    </div>
                    <div className="flex">
                      <p className="font-semibold mr-1">Capital: </p>
                      <span>{capital}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
      </div>
    </div>
  );
};

export default CountryCards;
