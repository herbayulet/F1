import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { ResponseData, ResponseRacesItem } from "../common/typeRaces";
import Layout from "../UI/Layout";
import { Entypo } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useFonts } from "expo-font";
import { useRaces } from "../../func/useRace";
export interface RacesItemProps {
  item: ResponseData;
  index: number;
}

const RacesItem = ({ item, index }: RacesItemProps) => {
  const [fontsLoaded] = useFonts({
    // "F1-Black": require("../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Black": require("../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("../../../assets/fonts/Formula1-Bold_web.ttf"),
    "F1-Bold-4": require("../../../assets/fonts/Formula1-Bold-4.ttf"),
    "F1-Italic": require("../../../assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular-1": require("../../../assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("../../../assets/fonts/Formula1-Wide.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const { races } = useRaces();

  const sortRaces = races.sort((r1, r2) => {
    return dayjs(r2.date).diff(dayjs(r1.date));
  });

  return (
    <View key={index}>
      <Layout>
        <View
          className="bg-white p-2 m-2 rounded-md"
          // style={{ padding: 10, margin: 5, backgroundColor: "white" }}
        >
          <View className="flex-row items-center">
            <View className="flex-row">
              <View className="flex-col items-center justify-center">
                <Text
                  className="text-slate-500"
                  style={{ fontFamily: "F1-Regular-1" }}
                >
                  {dayjs(item.date).subtract(2, "days").format("DD")}-
                  {dayjs(item?.date).format("DD")}
                </Text>
                <View
                  className={`bg-slate-300 w-12 p-[6px] items-center justify-center rounded-lg`}
                >
                  <Text
                    className="text-center text-slate-700 font-semibold text-xs font-fregular"
                    style={{ fontFamily: "F1-Bold" }}
                  >
                    {dayjs(item?.date).format("MMM")}
                  </Text>
                </View>
              </View>
              <View className="border-r-[1px] p-1 h-14 mr-1 border-slate-200" />
            </View>
            <View className="flex-col ml-2">
              <Text
                className="text-rose-400 text-sm"
                style={{ fontFamily: "F1-Regular-1" }}
              >
                ROUND {sortRaces.length - index}
              </Text>
              <View className="flex-row items-center justify-between w-80">
                <Text
                  className="text-left text-xl"
                  style={{ fontFamily: "F1-Black" }}
                >
                  {item?.competition?.location?.country}
                </Text>
                <Entypo
                  name="chevron-right"
                  size={20}
                  color="#ED0500"
                  style={{ marginRight: 10 }}
                />
              </View>
              <Text
                className="text-left text-slate-500 text-xs"
                style={{ fontFamily: "F1-Regular-1" }}
              >
                {item?.competition?.name}
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </View>
  );
};

const style = {
  list: "py-2 bg-blue-300 flex-1 items-center justify-center",
};

export default RacesItem;
