import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

const Products = ({ navigation }) => {
  const { products } = useContext(AuthContext);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Product", { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  price: {
    color: "green",
  },
});
