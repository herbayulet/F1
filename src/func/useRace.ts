import racesResponse from "../../assets/data/races.json";

export const useRaces = () => {
  const races = racesResponse?.data?.races?.response;

  return { races };
};
