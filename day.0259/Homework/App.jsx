import React from "react";
import { View, Button, Alert, Platform } from "react-native";
import MyText from "./components/Text/MyText";
import SafeAreaText from "./SafeAreaText";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStateComponent from "./AppStateComponent";

export default function App() {

  const showPlatformAlert = () => {
    if (Platform.OS === "ios") {
      Alert.alert("This is ios");
    } else {
      Alert.alert("This is android");
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
        <Button title="Check Platform" onPress={showPlatformAlert} />

        <MyText />

        <AppStateComponent />

        <SafeAreaText />

      </View>
    </SafeAreaProvider>
  );
}