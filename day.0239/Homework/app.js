import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, Switch, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3000/books';

export default function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [themeDark, setThemeDark] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      Alert.alert('Error', 'Failed to fetch books');
    }
  };

  const addBook = async () => {
    if (!title || !author || !year) return Alert.alert('Error', 'All fields are required');
    try {
      const res = await axios.post(API_URL, { title, author, year });
      setBooks([...books, res.data]);
      setTitle(''); setAuthor(''); setYear('');
    } catch (err) {
      Alert.alert('Error', 'Failed to add book');
    }
  };

  const updateBook = async (id) => {
    const newTitle = prompt('Enter new title');
    const newAuthor = prompt('Enter new author');
    const newYear = prompt('Enter new year');
    if (!newTitle || !newAuthor || !newYear) return;

    try {
      const res = await axios.put(`${API_URL}/${id}`, { title: newTitle, author: newAuthor, year: newYear });
      setBooks(books.map(b => b.id === id ? res.data : b));
    } catch (err) {
      Alert.alert('Error', 'Failed to update book');
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter(b => b.id !== id));
    } catch (err) {
      Alert.alert('Error', 'Failed to delete book');
    }
  };

  useEffect(() => { fetchBooks(); }, []);

  const styles = themeDark ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Theme</Text>
        <Switch value={themeDark} onValueChange={setThemeDark} />
      </View>

      <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput placeholder="Author" style={styles.input} value={author} onChangeText={setAuthor} />
      <TextInput placeholder="Year" style={styles.input} value={year} onChangeText={setYear} keyboardType="numeric" />
      <Button title="Add Book" onPress={addBook} />

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.text}>{item.title} - {item.author} ({item.year})</Text>
            <Button title="Edit" onPress={() => updateBook(item.id)} />
            <Button title="Delete" onPress={() => deleteBook(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const commonStyles = {
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', marginVertical: 5, padding: 5, borderRadius: 5 },
  bookItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
};

const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: { ...commonStyles.container, backgroundColor: '#fff' },
  text: { color: '#000' }
});

const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: { ...commonStyles.container, backgroundColor: '#222' },
  text: { color: '#fff' }
});
