import React, { useState, useEffect } from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Camera from "../Components/Camera";
import GoogleMap from '../Components/GoogleMap';

export default function App({ navigation }: NativeStackHeaderProps) {
 
  return (
    <View style={styles.parent}>
      <View style={styles.box}> 
        <Camera/>
      </View>
      <View style={styles.box2}>
        <GoogleMap />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    flex: 1.25,
    
  },
  box2: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});