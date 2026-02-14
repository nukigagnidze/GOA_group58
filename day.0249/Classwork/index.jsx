import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>

      <Link href="/about" asChild>
        <Button title="Go to About" />
      </Link>

      <Link href="/product/5" asChild>
        <Button title="Go to Product 5" />
      </Link>
    </View>
  );
}
