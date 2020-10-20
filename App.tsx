import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import { NhaNgoComponent } from './src/A10.NhaNgo/NgoQuyen';
import { TaySonComponent } from './src/A18.NhaTaySon/TaySon';
import { infoHistory } from './data-mock';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();


 export default function App() {
  let _Menu =  [];
  _Menu.push(    
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Lịch sử" >
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>)
  infoHistory.forEach(thoiki=>{
    thoiki.child.forEach(trieudai=>{
      _Menu.push(
        <Stack.Screen name={trieudai.sortname} component={TaySonComponent} />
      )
    })
  });
  //View home
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lịch sử" >
        <Stack.Screen name="Lịch sử" component={HomeScreen} />
        <Stack.Screen name="Thời tiền sử" component={TaySonComponent} />
        <Stack.Screen name="Thời đại Hồng Bàng" component={TaySonComponent} />
        <Stack.Screen name="Thời kỳ An Dương Vương" component={TaySonComponent} />
        <Stack.Screen name="Loạn 12 sứ quân" component={NhaNgoComponent} />
        <Stack.Screen name="Triều đại Tây Sơn" component={TaySonComponent}/>
        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
    }