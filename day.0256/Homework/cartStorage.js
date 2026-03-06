import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "SHOP_CART";

export const saveCart = async (cart) => {
  try {
    await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.log("Error saving cart:", error);
  }
};

export const getCart = async () => {
  try {
    const data = await AsyncStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting cart:", error);
    return [];
  }
};

export const clearCart = async () => {
  await AsyncStorage.removeItem(CART_KEY);
};