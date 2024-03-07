export interface RaceRankings {
  response: ResponseData[];
  get: string;
  parameters: Paramete;
  errors: any[];
}

interface Paramete {
  race: number;
}

export interface ResponseData {
  position: number;
  driver: Driver;
  gap: string;
  grid?: number | null;
  laps: number;
  pits?: any;
  race: Race;
  team: Team;
}

interface Team {
  id: number;
  logo: string;
  name: string;
}

interface Race {
  id: number;
}

interface Driver {
  id: number;
  name: string;
  abbr: string;
  image: string;
  number: number;
}
