import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  FlatList,
  Alert,
  StyleSheet,
  ActivityIndicator
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // მომხმარებლის დამატება
  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all inputs!");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    setUsers([...users, newUser]);
    setModalVisible(false);
    setName("");
    setEmail("");
    setPassword("");

    Alert.alert("Success", "User added successfully!");
  };

  // წაშლა
  const handleDelete = (id) => {
    Alert.alert(
      "გსურთ წაშლა?",
      "დარწმუნებული ხართ?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            setUsers(users.filter((user) => user.id !== id));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Add User" onPress={() => setModalVisible(true)} />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      {/* Users List */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userBox}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Button
              title="Delete"
              onPress={() => handleDelete(item.id)}
            />
          </View>
        )}
      />

      {/* 2) ActivityIndicator ნაწილი */}

      <Button
        title="Show Spinner"
        onPress={() => setLoading(true)}
      />
      <Button
        title="Close"
        onPress={() => setLoading(false)}
      />

      {/* 
      ActivityIndicator არის React Native კომპონენტი რომელიც აჩვენებს loading spinner-ს.
      გამოიყენება მაშინ როცა მიმდინარეობს რაიმე პროცესი (API request, data loading და ა.შ)
      */}

      {/* ternary operator გამოყენებით */}
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : null}

      {/*
      განსხვავება:

      1) ternary operator:
         loading ? <ActivityIndicator /> : null
         → კომპონენტი სრულად ემატება და იშლება DOM-იდან.
         ანუ თუ loading = false, საერთოდ აღარ არსებობს.

      2) animating attribute:
         <ActivityIndicator animating={loading} />
         → კომპონენტი ყოველთვის რენდერდება,
           მაგრამ animating={false} დროს უბრალოდ ჩერდება
           და არ ტრიალებს (არ ქრება DOM-იდან).

      ანუ:
      ternary → მთლიანად შლის კომპონენტს
      animating → მხოლოდ ანიმაციას აჩერებს
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  userBox: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});
