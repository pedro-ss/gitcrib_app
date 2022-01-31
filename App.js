import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './navigation/Routes';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Routes /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
});
