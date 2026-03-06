import React from "react";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeAreaText() {
  const insets = useSafeAreaInsets();

  return (
    <Text style={{ paddingTop: insets.top, fontSize: 20 }}>
      Safe Area Text
    </Text>
  );
}