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
import RacesItem, { RacesItemProps } from "./RacesItem";
import { useRaces } from "../../func/useRace";

const ListRace = () => {
  const { races, refreshRaces, fontsLoaded, sortRaces } = useRaces();

  // useEffect(() => {
  //   refreshRaces();
  // }, []);

  // if (!fontsLoaded) {
  //   return <ActivityIndicator />;
  // }

  const renderItem: ListRenderItem<RacesItemProps["item"]> = useCallback(
    ({ item, index }) => (
      <RacesItem item={item} index={index} sort={sortRaces} />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: ResponseRacesItem) => item.id?.toString() ?? "",
    []
  );

  const listEmptyComponent = useCallback(() => {
    return (
      <View className="flex-1 items-center justify-center">
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
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default ListRace;
