import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import * as data from './data.json';

export default function App() {

  const today = new Date().toDateString()

function isAfterToday(date) {
  return Date.parse(Object.keys(date)) >= new Date()
}

const binDay = Object.values(data.dates.find(isAfterToday)).toString()

  return (
    <View style={styles.container}>
      <Text>Magical Binny!</Text>
      <Text>Today's date is {today}</Text>
      <Text>The next bin day is: {binDay}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
