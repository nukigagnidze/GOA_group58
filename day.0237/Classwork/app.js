import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // Backend URL
  const API_URL = 'http://localhost:3000/api/items'; // თუ emulator ან თქვენი სერვერი სხვა IP-ზეა, შეცვალეთ

  // Fetch items from server
  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      Alert.alert('Error', 'Failed to fetch items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const addItem = async () => {
    if (!input.trim()) return Alert.alert('Error', 'Item cannot be empty');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });
      const newItem = await res.json();
      setItems([...items, newItem]);
      setInput('');
    } catch (err) {
      Alert.alert('Error', 'Failed to add item');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New item"
        value={input}
        onChangeText={setInput}
      />
      <Pressable style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 50 
},

  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 
},

  button: { 
    backgroundColor: '#2196F3', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginBottom: 10 
},
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
},
  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc' 
}
});
