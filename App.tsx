import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';
import FilterScreen from './screens/FilterScreen';

export type MenuItem = {
  id: number;
  dishName: string;
  description: string;
  price: number;
  course: string;
};

const Stack = createStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <HomeScreen menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddMenuItem">
          {() => <AddMenuItemScreen menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {() => <FilterScreen menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
