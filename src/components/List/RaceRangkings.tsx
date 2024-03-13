import { View, Text, StyleSheet } from "react-native";
import React from "react";
import racerangkings from "../../../assets/data/race-rankings.json";
import Layout from "../UI/Layout";

const data = racerangkings.data.raceRankings.response;

interface RaceRangkingsProps {
  item: (typeof data)[0];
}
const RaceRangkings = ({ item }: RaceRangkingsProps) => {
  return (
    <Layout>
      <View style={style.card}>
        <Text style={style.teks}>RaceRangkings: {item.driver.name}</Text>
      </View>
    </Layout>
  );
};

export default RaceRangkings;

const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 2,
    margin: 2,
    borderRadius: 10,
  },
  teks: {
    textAlign: "center",
  },
});
