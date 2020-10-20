import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';

import { infoHistory } from './data-mock';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();


 export default function App() {
  //View home
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lịch sử" >
        <Stack.Screen name="Lịch sử" component={HomeScreen} options={{ title: 'Lịch Sử' }}/>
        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
    }