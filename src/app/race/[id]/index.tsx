import { View, Text, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import raceResponse from "../../../../assets/data/race.json";

const race = raceResponse.data.races.response[0];
const RaceDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>
        RaceDetails: {race.competition.location.country} {race.season}
      </Text>
      <Text>{race.circuit.name}</Text>
      <Image
        source={{ uri: race.circuit.image }}
        resizeMode="contain"
        style={{ width: "100%", aspectRatio: 14 / 9, marginVertical: 15 }}
      />
    </View>
  );
};

export default RaceDetails;
