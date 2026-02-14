import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Books from "../screens/Books";
import BookDetails from "../screens/BookDetails";

const Stack = createNativeStackNavigator();

export default function BooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BooksList" component={Books} options={{ title: "Books" }} />
      <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: "Book Details" }} />
    </Stack.Navigator>
  );
}
