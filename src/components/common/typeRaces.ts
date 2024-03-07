export interface ListRacesProps {
  errors: any[];
  response: Response[];
  results: number;
}

export interface ResponseRacesItem {
  circuit?: any;
  competition?: any;
  date?: string;
  distance?: string;
  fastest_lap?: any;
  id?: number;
  season?: number;
  status?: string;
  timezone?: string;
  type?: string;
  weather?: any;
}

interface RootObject {
  data: Data;
}

interface Data {
  races: Races;
}

export interface Races {
  errors: any[];
  response: ResponseData[];
  results: number;
}

export interface ResponseData {
  date: string;
  distance: string;
  id: number;
  season: number;
  status: string;
  timezone: string;
  type: string;
  weather?: any;
  competition: Competition;
  circuit: Circuit;
  fastest_lap: Fastestlap;
}

interface Fastestlap {
  driver: Driver;
  time?: string | null;
}

interface Driver {
  id?: number | null;
}

interface Circuit {
  id: number;
  image: string;
  name: string;
}

interface Competition {
  id: number;
  name: string;
  location: Location;
}

interface Location {
  city: string;
  country: string;
}
