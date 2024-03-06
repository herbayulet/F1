import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useRaces } from "../../func/useRace";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { ResponseRacesItem } from "../common";
import RacesItem from "./RacesItem";
import Layout from "../UI/Layout";

const ListRace = () => {
  const { races } = useRaces();
  const data = races;

  const renderItem: ListRenderItem<ResponseRacesItem> = useCallback(
    ({ item, index }) => <RacesItem item={item} index={index} />,
    []
  );

  const keyExtractor = useCallback(
    (item: ResponseRacesItem) => item.id?.toString() ?? "",
    []
  );

  const listEmptyComponent = useCallback(() => {
    return (
      <View>
        <Text>Tidak ada data ....</Text>
      </View>
    );
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={races}
      renderItem={renderItem}
      ListEmptyComponent={listEmptyComponent}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes the full height/width
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default ListRace;
