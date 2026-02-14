import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Product = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text>{product.description}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
});
