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
