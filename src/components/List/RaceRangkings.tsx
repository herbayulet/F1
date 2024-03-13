import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";
import racerangkings from "../../../assets/data/race-rankings.json";
import Layout from "../UI/Layout";
import { useFonts } from "expo-font";

const data = racerangkings.data.raceRankings.response;

interface RaceRangkingsProps {
  item: (typeof data)[0];
}
const RaceRangkings = ({ item }: RaceRangkingsProps) => {
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
  return (
    <Layout>
      <View style={style.card}>
        <View style={style.containerCard}>
          <View style={{ flexDirection: "row", margin: 2 }}>
            <Text
              style={{
                fontFamily: "F1-Bold",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              {item.position}
            </Text>
            <Image
              source={{ uri: item.driver.image }}
              style={{ width: 35, height: 44, borderRadius: 5, marginLeft: 10 }}
            />
            <Text style={{ fontFamily: "F1-Bold-4", marginLeft: 8 }}>
              {item.driver.name}
            </Text>
          </View>
          <View className="bg-slate-700 p-1 rounded-md px-2 ">
            <Text
              className="text-white text-center text-[10px] flex-1"
              style={{ fontFamily: "F1-Italic" }}
            >
              {item.team.name}
            </Text>
          </View>
        </View>
        {/* <Text>{ite}</Text> */}
      </View>
    </Layout>
  );
};

export default RaceRangkings;

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 2,
    margin: 8,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 3,
    // alignItems: "center",
  },
  teks: {
    // textAlign: "center",
    // flex: 1,
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
});
