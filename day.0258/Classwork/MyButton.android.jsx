import React from "react";
import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native";

export default function MyButton() {

  const showAlert = () => {
    Alert.alert(
      "Android Alert",
      "This is Android button",
      [
        { text: "No" },
        { text: "Yes" },
        { text: "Later" }
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={showAlert}>
      <Text style={styles.text}>Android Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10
  },

  text: {
    color: "white",
    fontSize: 18
  }
});