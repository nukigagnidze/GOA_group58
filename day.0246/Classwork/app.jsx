import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const products = [
  { id: "1", name: "iPhone 15", price: "$999", description: "Latest Apple smartphone" },
  { id: "2", name: "Samsung S24", price: "$899", description: "Flagship Samsung device" },
  { id: "3", name: "MacBook Pro", price: "$1999", description: "Powerful Apple laptop" },
  { id: "4", name: "AirPods Pro", price: "$249", description: "Wireless earbuds" },
];

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Screen</Text>

      {/* navigate → გადადის კონკრეტულ გვერდზე */}
      <Button
        title="Go to About (navigate)"
        onPress={() => navigation.navigate("About")}
      />

      {/* push → იმავე screen-ს კიდევ ერთხელ ამატებს stack-ში */}
      <Button
        title="Push About"
        onPress={() => navigation.push("About")}
      />

      {/* replace → მიმდინარე გვერდს ანაცვლებს სხვით */}
      <Button
        title="Replace with Contact"
        onPress={() => navigation.replace("Contact")}
      />

      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About Screen</Text>

      {/* goBack → აბრუნებს წინა გვერდზე */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />

      {/* pop → ერთი step-ით აბრუნებს უკან stack-ში */}
      <Button title="Pop 1 screen" onPress={() => navigation.pop()} />

      {/* navigate → კონკრეტულ გვერდზე გადასვლა */}
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Screen</Text>

      {/* pop(2) → ორ step-ით დაბრუნება */}
      <Button title="Pop 2 Screens" onPress={() => navigation.pop(2)} />

      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍 Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productBox}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>

            {/* 
              navigate("Product", { id })
              → გადავცემთ id პარამეტრს 
            */}
            <Button
              title="See Details"
              onPress={() =>
                navigation.navigate("Product", { id: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

function Product({ route, navigation }) {
  const { id } = route.params;

  // id-ის მიხედვით ვპოულობთ ობიექტს
  const product = products.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Product Details</Text>

      <Text>Name: {product.name}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Description: {product.description}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productBox: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    width: 250,
  },
});
