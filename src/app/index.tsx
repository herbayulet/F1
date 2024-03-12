import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Race from "../screens/Race";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Race /> */}
      <StatusBar style="auto" />
      <Link href={"/about"}>Go to About</Link>
      <Race />
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
