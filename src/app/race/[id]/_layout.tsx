import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useFonts } from "expo-font";
import { Stack, withLayoutContext } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import RaceDetails from ".";
import PageQualifying from "./qualifying";
import RacePage from "./race";

export default function RaceLayout() {
  const Tab = createMaterialTopTabNavigator();
  const TopTabs = withLayoutContext(Tab.Navigator);
  const [fontsLoaded] = useFonts({
    // "F1-Black": require("../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Black": require("../../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("../../../../assets/fonts/Formula1-Bold_web.ttf"),
    "F1-Bold-4": require("../../../../assets/fonts/Formula1-Bold-4.ttf"),
    "F1-Italic": require("../../../../assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular-1": require("../../../../assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("../../../../assets/fonts/Formula1-Wide.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Race Details",
          headerBackVisible: false,
        }}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: "F1-Bold",
          },
          tabBarStyle: {
            backgroundColor: "red",
          },
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            height: 5,
          },
        }}
      >
        <Tab.Screen
          name="index"
          component={RaceDetails}
          options={{ tabBarLabel: "Details" }}
        />
        <Tab.Screen
          name="qualifying"
          component={PageQualifying}
          options={{ tabBarLabel: "Qualify" }}
        />
        <Tab.Screen
          name="race"
          component={RacePage}
          options={{ tabBarLabel: "Race" }}
        />
      </Tab.Navigator>
      {/* <TopTabs
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: "F1-Bold",
          },
          tabBarStyle: {
            backgroundColor: "red",
          },
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            height: 5,
          },
        }}
      >
        <TopTabs.Screen name="index" options={{ title: "Details" }} />
      </TopTabs> */}
    </>
  );
}
