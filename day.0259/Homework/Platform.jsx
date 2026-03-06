import { Platform, Alert, Button } from "react-native";

const showPlatformAlert = () => {
  if (Platform.OS === "ios") {
    Alert.alert("This is ios");
  } else {
    Alert.alert("This is android");
  }
};