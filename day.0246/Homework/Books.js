import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const books = [
  { id: "1", title: "Atomic Habits", author: "James Clear", description: "Book about building good habits." },
  { id: "2", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", description: "Financial education book." },
  { id: "3", title: "The Alchemist", author: "Paulo Coelho", description: "Story about following dreams." },
];

export default function Books({ navigation }) {
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.author}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BookDetails", { book: item })}
          >
            <Text style={styles.buttonText}>See more about this book</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
