import { View, Text } from "react-native";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  styling?: string;
}

const Layout = ({ children, styling }: LayoutProps) => {
  return <View className={`flex-1 mx-3 ${styling}`}>{children}</View>;
};

export default Layout;
