import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstUseScreen from './src/Screens/FirstUseScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigators/Navigator';
import { Provider } from 'react-redux';
import Store from './src/Redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

