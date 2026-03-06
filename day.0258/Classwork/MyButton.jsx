import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Default Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 8
  },

  text: {
    color: "white",
    fontSize: 18
  }
});