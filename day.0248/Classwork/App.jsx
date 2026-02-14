import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./navigation/ShopStack";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={ShopStack} />
    </Tab.Navigator>
  );
}