import { View, Text } from "react-native";
import React from "react";
import { ResponseData, ResponseRacesItem } from "../common/typeRaces";
import Layout from "../UI/Layout";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export interface RacesItemProps {
  item: ResponseData;
  index: number;
}

const RacesItem = ({ item, index }: RacesItemProps) => {
  return (
    <View key={index}>
      <Layout>
        <View
          className="bg-white p-2 m-2 rounded-md"
          // style={{ padding: 10, margin: 5, backgroundColor: "white" }}
        >
          <View className="flex-row items-center">
            <View className="flex-row">
              <View className="flex-col items-center justify-center">
                <Text className="text-slate-500">03-05</Text>
                <View className="bg-slate-300 w-9 px-[5px] items-center justify-center rounded-lg">
                  <Text className="text-center text-slate-700 font-semibold text-base">
                    Nov
                  </Text>
                </View>
              </View>
              <View className="border-r-[1px] p-1 h-14 mr-1 border-slate-200" />
            </View>
            <View className="flex-col ml-2">
              <Text className="text-rose-400 text-sm">
                ROUND {item?.circuit?.id}
              </Text>
              <View className="flex-row items-center justify-between w-80">
                <Text className="text-left text-xl font-black">
                  {item?.competition?.location?.country}
                </Text>
                <Entypo
                  name="chevron-right"
                  size={20}
                  color="#ED0500"
                  style={{ marginRight: 10 }}
                />
              </View>
              <Text className="text-left text-slate-500 text-xs">
                {item?.competition?.name}
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </View>
  );
};

const style = {
  list: "py-2 bg-blue-300 flex-1 items-center justify-center",
};

export default RacesItem;
