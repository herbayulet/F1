import { Races } from "../src/components/common/typeRaces";
import racesData from "../assets/data/races.json";

export const fetchRacesData = async (): Promise<Races["response"]> => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        return res(racesData?.data?.races?.response);
      }, 1000);
    } catch (error) {
      rej(error);
    }
  });
};
