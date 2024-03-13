import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRangkingsss } from "../../func/useRangkings";
import RaceRangkings from "./RaceRangkings";
import { useCallback } from "react";

const ListRangkings = () => {
  const { rengkings } = useRangkingsss();

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.container}>
        <Text>Tidak ada data ....</Text>
      </View>
    );
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={rengkings}
        renderItem={({ item }) => <RaceRangkings item={item} />}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

export default ListRangkings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
