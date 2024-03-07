import { Stack } from "expo-router";

const PublicLayout = () => {
  <>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ED0500",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="race" />
    </Stack>
  </>;
};

export default PublicLayout;
