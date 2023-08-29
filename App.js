import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabNavigator from './Fenetres/BottomNavigation/BottomNavigation'; // Importez le composant créé

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
