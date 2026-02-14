import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export default function BookDetails({ route }) {
  const { book } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text style={{ marginVertical: 10 }}>{book.description}</Text>

      <Button title="Add to cart" onPress={() => addToCart(book)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
