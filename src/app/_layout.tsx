import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    // "F1-Black": require("../../../assets/fonts/Formula1-Black.ttf"),
    "F1-Black": require("../../assets/fonts/Formula1-Black.ttf"),
    "F1-Bold": require("../../assets/fonts/Formula1-Bold_web.ttf"),
    "F1-Bold-4": require("../../assets/fonts/Formula1-Bold-4.ttf"),
    "F1-Italic": require("../../assets/fonts/Formula1-Italic.ttf"),
    "F1-Regular-1": require("../../assets/fonts/Formula1-Regular-1.ttf"),
    "F1-Wide": require("../../assets/fonts/Formula1-Wide.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTitleStyle: { color: "white", fontFamily: "F1-Bold" },
          title: "Racing",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Race", headerBackTitleVisible: false }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};

export default RootLayout;
