import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import { MenuItem } from '../App';

type FilterScreenProps = {
  menuItems: MenuItem[];
};

const FilterScreen: React.FC<FilterScreenProps> = ({ menuItems }) => {
  const [filter, setFilter] = useState('');
  const filteredItems = menuItems.filter((item) => item.course.toLowerCase().includes(filter.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter course (e.g., Starters, Mains, Desserts)"
        value={filter}
        onChangeText={setFilter}
        style={styles.input}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.dishName} - ${item.price.toFixed(2)} ({item.course})
          </Text>
        )}
      />
      <Button title="Clear Filter" onPress={() => setFilter('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FilterScreen;
