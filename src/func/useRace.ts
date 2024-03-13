import { useEffect, useState } from "react";
import { fetchRacesData } from "../../services/racesData";
import { ResponseRacesItem } from "../components/common/typeRaces";
import { useFonts } from "expo-font";
import dayjs from "dayjs";
import racesis from "../../assets/data/races.json";

export const useRaces = () => {
  const [races, setRaces] = useState<ResponseRacesItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null as Error | null);
  const datas = racesis.data.races.response;

  const [fontsLoaded] = useFonts({
    "F1-Black": require("../../assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("../../assets/fonts/Formula1-Bold_web.ttf"),
    "F1-Bold-4": require("../../assets/fonts/Formula1-Bold-4.ttf"),
    "F1-Italic": require("../../assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular-1": require("../../assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("../../assets/fonts/Formula1-Wide.ttf"),
  });

  const refreshRaces = async () => {
    try {
      setLoading(true);
      const refreshedData = await fetchRacesData();
      setRaces(refreshedData);
    } catch (error) {
      // setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRacesData();
        setRaces(data);
      } catch (error) {
        // setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortRaces = races.sort((r1, r2) => {
    return dayjs(r2.date).diff(dayjs(r1.date));
  });

  return { races, loading, error, refreshRaces, fontsLoaded, sortRaces, datas };
};
