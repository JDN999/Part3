import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MenuItem as MenuItemType } from '../App';

type MenuItemProps = {
  item: MenuItemType;
  onDelete: (id: number) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
      <Text>Course: {item.course}</Text>
      <Button title="Delete" onPress={() => onDelete(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuItem;
