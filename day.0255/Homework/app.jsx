import { Alert } from "react-native";

const cache = {};

export async function fetchWithRetry(url, retries = 3) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    // cache-ში შენახვა
    cache[url] = data;

    return data;

  } catch (error) {

    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      return fetchWithRetry(url, retries - 1);
    }

    // თუ retries ამოიწურა
    Alert.alert("Network request failed");

    // cache მონაცემის დაბრუნება
    if (cache[url]) {
      return cache[url];
    }

    return null;
  }
}