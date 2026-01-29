import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [textValues, setTextValues] = useState({
    default: '',
    numeric: '',
    email: '',
    password: '',
    phone: '',
  });

  // Handle text change
  const handleChange = (key, value) => {
    setTextValues({ ...textValues, [key]: value });
  };

  // 50 ელემენტიანი სია
  const data = Array.from({ length: 50 }, (_, i) => ({ id: i.toString(), name: `Item ${i + 1}` }));

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS-ზე padding, Android-ზე height
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>All Types of Inputs</Text>

        {/* ყველა ტიპის ინფუთი ერთ სტილით */}
        <TextInput
          style={styles.input}
          placeholder="Default Input"
          value={textValues.default}
          onChangeText={(text) => handleChange('default', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Numeric Input"
          keyboardType="numeric"
          value={textValues.numeric}
          onChangeText={(text) => handleChange('numeric', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Input"
          keyboardType="email-address"
          value={textValues.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password Input"
          secureTextEntry
          value={textValues.password}
          onChangeText={(text) => handleChange('password', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Input"
          keyboardType="phone-pad"
          value={textValues.phone}
          onChangeText={(text) => handleChange('phone', text)}
        />

        <Text style={[styles.title, { marginTop: 30 }]}>FlatList Example (50 items)</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.name}</Text>}
          style={{ maxHeight: 300 }} // მაგალითი რომ ვნახოთ scroll
        />

        <Text style={[styles.title, { marginTop: 30 }]}>ScrollView Example (50 items)</Text>
        {/* ScrollView-ით სია */}
        <View style={{ maxHeight: 300 }}>
          <ScrollView>
            {data.map((item) => (
              <Text key={item.id} style={styles.listItem}>{item.name}</Text>
            ))}
          </ScrollView>
        </View>

        {/* კომენტარი განსხვავებაზე */}
        {/*
          FlatList:
            - ოპტიმიზირებული დიდი სიისთვის.
            - მხოლოდ ხედვაში არსებული ელემენტები ირენდება.
            - უკეთესი შესრულება 100+ ელემენტისთვის.
          
          ScrollView:
            - ყველა ელემენტი ერთბაშად ირენდება.
            - პატარა სიისთვის OK, მაგრამ დიდი სიისთვის ვიღებთ performance issue-ს.
        */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20 
},

  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 
},

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
