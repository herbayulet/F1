import React from "react";
import Layout from "../components/UI/Layout";
import ListRace from "../components/List/ListRace";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

const Race = () => {
  return (
    <View style={{ backgroundColor: "whitesmoke" }}>
      <ListRace />
    </View>
  );
};

export default Race;
