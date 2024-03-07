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
  const { races, refreshRaces, fontsLoaded } = useRaces();

  useEffect(() => {
    refreshRaces();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  const renderItem: ListRenderItem<RacesItemProps["item"]> = useCallback(
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
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default ListRace;
