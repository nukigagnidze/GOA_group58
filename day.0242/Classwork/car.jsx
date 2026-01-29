import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, Modal, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';

// 40 პროდუქტი AI-სგან (მაგალითად)
const PRODUCTS = Array.from({ length: 40 }, (_, i) => ({
  id: i.toString(),
  name: `Product ${i + 1}`,
  price: `${(Math.random() * 100 + 1).toFixed(2)}$`
}));

export default function App() {
  // 1️⃣ FlatList - პროდუქტები
  const [products] = useState(PRODUCTS);

  // 2️⃣ Car Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [cars, setCars] = useState([]);

  // Add Car
  const addCar = () => {
    if (!carName || !carModel || !carYear || !carColor) {
      return Alert.alert('Error', 'ყველა ველი უნდა იყოს შევსებული');
    }
    const newCar = {
      id: Date.now().toString(),
      name: carName,
      model: carModel,
      year: carYear,
      color: carColor
    };
    setCars([...cars, newCar]);
    setCarName(''); setCarModel(''); setCarYear(''); setCarColor('');
    setModalVisible(false);
  };

  // Delete Car
  const deleteCar = (id) => {
    Alert.alert(
      'Do you want to delete this car?',
      'This action cannot be undone',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm', style: 'destructive', onPress: () => {
            setCars(cars.filter(car => car.id !== id));
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Products (FlatList 40 items)</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        style={{ maxHeight: 300, marginBottom: 20 }}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - {item.price}</Text>
        )}
      />

      <Button title="Add Car" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Car Name"
              value={carName}
              onChangeText={setCarName}
            />
            <TextInput
              style={styles.input}
              placeholder="Car Model"
              value={carModel}
              onChangeText={setCarModel}
            />
            <TextInput
              style={styles.input}
              placeholder="Year"
              keyboardType="numeric"
              value={carYear}
              onChangeText={setCarYear}
            />
            <TextInput
              style={styles.input}
              placeholder="Color"
              value={carColor}
              onChangeText={setCarColor}
            />
            <Button title="Add" onPress={addCar} />
            <Button title="Cancel" color="grey" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Text style={[styles.title, { marginTop: 20 }]}>Added Cars:</Text>
      {cars.map(car => (
        <View key={car.id} style={styles.carItem}>
          <Text>{car.name} | {car.model} | {car.year} | {car.color}</Text>
          <Pressable style={styles.deleteButton} onPress={() => deleteCar(car.id)}>
            <Text style={{ color: '#fff' }}>Delete</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10 
},

  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc' 
},

  modalContainer: { 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'rgba(0,0,0,0.5)' 
},

  modalContent: { 
    width:'90%', 
    backgroundColor:'#fff', 
    padding:20, 
    borderRadius:10 
},

  input: { 
    borderWidth:1, 
    borderColor:'#ccc', 
    padding:10, 
    marginBottom:10, 
    borderRadius:5 
},

  carItem: { 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    marginVertical:5, 
    padding:10, 
    borderWidth:1, 
    borderColor:'#ccc', 
    borderRadius:5 
},

  deleteButton: { 
    backgroundColor:'red', 
    padding:5, 
    borderRadius:5 
}
});
