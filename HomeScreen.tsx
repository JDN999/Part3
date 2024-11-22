import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuItem } from '../App';

type HomeScreenProps = {
  menuItems: MenuItem[];
};

const HomeScreen: React.FC<HomeScreenProps> = ({ menuItems }) => {
  const calculateAverages = () => {
    const courses = menuItems.reduce((acc, item) => {
      acc[item.course] = acc[item.course] || [];
      acc[item.course].push(item.price);
      return acc;
    }, {} as { [key: string]: number[] });

    return Object.entries(courses).map(([course, prices]) => ({
      course,
      averagePrice: (prices.reduce((sum, price) => sum + price, 0) / prices.length).toFixed(2),
    }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.dishName} - ${item.price.toFixed(2)}</Text>
        )}
      />
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
      <Button title="Filter by Course" onPress={() => navigation.navigate('Filter')} />
      <Text style={styles.averageTitle}>Average Prices:</Text>
      {calculateAverages().map(({ course, averagePrice }) => (
        <Text key={course}>
          {course}: ${averagePrice}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  averageTitle: { marginTop: 20, fontWeight: 'bold' },
});

export default HomeScreen;
