import 'react-native-gesture-handler';
import React from 'react';
import { ImageBackgroundBase, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/views/Inicial/Inicial';
import Resumo from './src/views/Resumo/Resumo';
import Detalhe from './src/views/Detalhe/Detalhe';

const Stack =  createStackNavigator();



export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Resumo" component={Resumo} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
      </NavigationContainer>
    );
    }

