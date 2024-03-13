import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { ResponseRacesItem } from "../common/typeRaces";
import RacesItem from "./RacesItem";
import { useRaces } from "../../func/useRace";
import { Link } from "expo-router";
import dayjs from "dayjs";

const ListRace = () => {
  const { races, datas, refreshRaces, fontsLoaded } = useRaces();

  // useEffect(() => {
  //   refreshRaces();
  // }, []);

  // if (!fontsLoaded) {
  //   return <ActivityIndicator />;
  // }

  const sortRaces = datas.sort((r1, r2) => {
    return dayjs(r2.date).diff(dayjs(r1.date));
  });

  const keyExtractor = useCallback(
    (item: ResponseRacesItem) => item.id?.toString() ?? "",
    []
  );

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.container}>
        <Text>Tidak ada data ....</Text>
      </View>
    );
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={sortRaces}
      renderItem={({ item, index }) => <RacesItem index={index} item={item} />}
      ListEmptyComponent={listEmptyComponent}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListRace;
