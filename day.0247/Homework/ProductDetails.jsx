import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;

  const handleBuy = () => {
    Alert.alert("Success", "You have added a product to the cart");
  };

  return (
    <View style={styles.container}>

      {/* 🔙 Go Back */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>⬅ Go Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <Button title="Buy" onPress={handleBuy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  back: {
    color: "#2196F3",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginVertical: 10,
  },
  desc: {
    marginBottom: 20,
  },
});
