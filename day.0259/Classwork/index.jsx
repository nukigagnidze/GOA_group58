import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  return (

    // SafeAreaProvider უზრუნველყოფს safe area კონტექსტს მთელ აპლიკაციაში
    // ეს საჭიროა იმისთვის, რომ SafeAreaView და useSafeAreaInsets იმუშაონ
    <SafeAreaProvider>

      {/* 
        SafeAreaView ავტომატურად ამატებს padding-ს 
        იმ ადგილებში სადაც არის სისტემური ელემენტები 
        (notch, status bar, navigation bar)
      */}
      <SafeAreaView style={styles.container}>

        <Text style={styles.text}>
          This text is inside SafeAreaView
        </Text>

      </SafeAreaView>

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4ff",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 20
  }
});