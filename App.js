import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, StatusBar } from 'react-native';

import Constants from 'expo-constants';

import HomeScreen from './src/screens/Home';

export default function App() {

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "white",
  },
});
