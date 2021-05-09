import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex3() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
<View style={{
width: 50, height: 50, 
backgroundColor: '#50E3C2'}} />
<View style={{
width: 50, height: 50, 
backgroundColor: 'steelblue'}} />
<View style={{
width: 50, height: 50, 
backgroundColor: '#6200EE'}} />
</View>


  );
}

