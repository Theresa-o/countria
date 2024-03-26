export interface Country {
    altSpellings?: (string)[] | null;
    area: number;
    borders?: (string)[] | null;
    capital?: (string)[] | null;
    capitalInfo: CapitalInfo;
    car: Car;
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: CoatOfArms;
    continents?: (string)[] | null;
    currencies: Currencies;
    demonyms: Demonyms;
    fifa: string;
    flag: string;
    flags: Flags;
    idd: Idd;
    independent: boolean;
    landlocked: boolean;
    languages: Languages;
    latlng?: (number)[] | null;
    maps: Maps;
    name: Name;
    population: number;
    postalCode: PostalCode;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones?: (string)[] | null;
    tld?: (string)[] | null;
    translations: Translations;
    unMember: boolean;
  }
  export interface CapitalInfo {
    latlng?: (number)[] | null;
  }
  export interface Car {
    signs?: (null)[] | null;
    side: string;
  }
  export interface CoatOfArms {
    png: string;
    svg: string;
  }
  export interface Currencies {
    EUR: EUR;
  }
  export interface EUR {
    name: string;
    symbol: string;
  }
  export interface Demonyms {
    eng: EngOrFra;
    fra: EngOrFra;
  }
  export interface EngOrFra {
    f: string;
    m: string;
  }
  export interface Flags {
    png: string;
    svg: string;
    alt: string;
  }
  export interface Idd {
    root: string;
    suffixes?: (string)[] | null;
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
    nativeName: NativeName;
  }
  export interface NativeName {
    cat: CatOrAraOrBreOrCesOrCymOrDeu;
  }
  export interface CatOrAraOrBreOrCesOrCymOrDeu {
    official: string;
    common: string;
  }
  export interface PostalCode {
    format: string;
    regex: string;
  }
  export interface Translations {
    ara: CatOrAraOrBreOrCesOrCymOrDeu;
    bre: CatOrAraOrBreOrCesOrCymOrDeu;
    ces: CatOrAraOrBreOrCesOrCymOrDeu;
    cym: CatOrAraOrBreOrCesOrCymOrDeu;
    deu: CatOrAraOrBreOrCesOrCymOrDeu;
  }
  