import raceRangkings from "../../assets/data/race-rankings.json";

export const useRangkingsss = () => {
  const rengkings = raceRangkings.data.raceRankings.response;
  return { rengkings };
};
