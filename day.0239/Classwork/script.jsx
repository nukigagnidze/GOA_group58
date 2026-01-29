import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(previous => !previous);

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#000' : '#fff' }]}>
      <Text style={{ color: isDarkTheme ? '#fff' : '#000', fontSize: 20, marginBottom: 20 }}>
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </Text>

      <Switch
        value={isDarkTheme}
        onValueChange={toggleTheme}
        thumbColor={isDarkTheme ? '#fff' : '#000'}
        trackColor={{ false: '#ccc', true: '#555' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
