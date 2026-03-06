import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  box: {
    padding: 20,

    ...Platform.select({
      ios: {
        backgroundColor: "lightblue",
      },

      android: {
        backgroundColor: "lightgreen",
      },

      default: {
        backgroundColor: "gray",
      },
    }),
  },
});