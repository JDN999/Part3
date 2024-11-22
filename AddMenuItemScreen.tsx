import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../App';

type AddMenuItemScreenProps = {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const AddMenuItemScreen: React.FC<AddMenuItemScreenProps> = ({ menuItems, setMenuItems }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      dishName,
      description,
      price: parseFloat(price),
      course,
    };
    setMenuItems([...menuItems, newItem]);
    setDishName('');
    setDescription('');
    setPrice('');
    setCourse('');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TextInput placeholder="Course" value={course} onChangeText={setCourse} />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default AddMenuItemScreen;
