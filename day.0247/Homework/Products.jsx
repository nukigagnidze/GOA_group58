import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function Products({ navigation }) {
  const { products } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter by Category
  const filterByCategory = (category) => {
    const filtered = products.filter(
      (item) => item.category === category
    );
    setFilteredProducts(filtered);
  };

  // Filter by Price (< 50)
  const filterByPrice = () => {
    const filtered = products.filter(
      (item) => item.price < 50
    );
    setFilteredProducts(filtered);
  };

  // Reset
  const resetFilter = () => {
    setFilteredProducts(products);
  };

  return (
    <View style={{ flex: 1 }}>
      
      {/* FILTER BUTTONS */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => filterByCategory("electronics")}
        >
          <Text style={styles.filterText}>Electronics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={filterByPrice}
        >
          <Text style={styles.filterText}>Price 50</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={resetFilter}
        >
          <Text style={styles.filterText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCT LIST */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>${item.price}</Text>

            <TouchableOpacity
              style={styles.detailsBtn}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            >
              <Text style={styles.detailsText}>See More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  filterBtn: {
    backgroundColor: "#2196F3",
    padding: 8,
    borderRadius: 8,
  },
  resetBtn: {
    backgroundColor: "#f44336",
    padding: 8,
    borderRadius: 8,
  },
  filterText: {
    color: "white",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsBtn: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 8,
  },
  detailsText: {
    color: "white",
    textAlign: "center",
  },
});
