import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Race from "./src/screens/Race";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRaces } from "./src/func/useRace";
import Layout from "./src/components/UI/Layout";
import ListRace from "./src/components/List/ListRace";

export default function App() {
  const { races } = useRaces();
  return (
    <View style={styles.container}>
      {/* <Race /> */}
      <StatusBar style="auto" />
      <SafeAreaView>
        <Race />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
