import React from "react";
import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native";

export default function MyButton() {

  const showAlert = () => {
    Alert.alert(
      "IOS Alert",
      "This is IOS button",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK" }
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={showAlert}>
      <Text style={styles.text}>IOS Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 15,
    borderRadius: 10
  },

  text: {
    color: "white",
    fontSize: 18
  }
});