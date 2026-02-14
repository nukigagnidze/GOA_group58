import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "../screens/Products";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopStack;
