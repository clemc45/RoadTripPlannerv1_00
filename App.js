import * as React from 'react';
import { Text, View } from 'react-native'; // Importez le composant Text de react-native
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; // Assurez-vous d'installer la bibliothèque d'icônes

import ecranAcceuil from './Fenetres/BottomNavigation/Acceuil';
import ecranMap from './Fenetres/BottomNavigation/Map'
import ecranSettings from './Fenetres/BottomNavigation/Setting'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accueil"
          component={ecranAcceuil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Carte"
          component={ecranMap}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Paramètres"
          component={ecranSettings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
