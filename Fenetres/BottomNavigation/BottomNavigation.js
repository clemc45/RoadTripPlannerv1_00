import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; // Assurez-vous d'installer la bibliothèque d'icônes

import ecranAcceuil from './Acceuil';
import ecranMap from './Map'
import ecranSettings from './Setting'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
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
    );
};


export default BottomTabNavigator;

