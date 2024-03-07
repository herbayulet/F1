import rangkingsRaces from "../assets/data/race-rankings.json";
import { RaceRankings } from "../src/components/common/typeRaceRankings";

export const fetchRacesRangkingData = async (): Promise<
  RaceRankings["response"]
> => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        return res(rangkingsRaces?.data?.raceRankings?.response);
      }, 1000);
    } catch (error) {
      rej(error);
    }
  });
};
