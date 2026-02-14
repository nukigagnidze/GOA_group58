import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GeneralForm = ({ onSubmit, buttonTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button title={buttonTitle} onPress={() => onSubmit(email, password)} />
    </View>
  );
};

export default GeneralForm;

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
});
