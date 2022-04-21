import React, { useState, useEffect } from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native';

// this page needs to act as a list to store data. Use FlatList component. 
export default function App({ navigation }: NativeStackHeaderProps) {
  return (
    //ON TAKE PICTURE MAKE IT SO THAT THE SCROLLVIEW WILL ADD MORE ITEMS TO THE LIST.
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text style={styles.subHeading}>Location 1</Text>
        <Image style={styles.Image} source={{uri: 'https://i.imgur.com/GqI8paA.png', }} />
        <Text style={styles.text}>Latitude: 39.74475076197903</Text>
        <Text style={styles.text}>Longitude: -75.57225027566297</Text>
        
        <Text style={styles.subHeading}>Location 2</Text>
        <Image style={styles.Image} source={{uri: 'https://i.imgur.com/wvyIo5f.png', }} />
        <Text style={styles.text}>Latitude: 42.24475076197903</Text>
        <Text style={styles.text}>Longitude: -72.67225027566297</Text>

        <Text style={styles.subHeading}>Location 3</Text>
        <Image style={styles.Image} source={{uri: 'https://i.imgur.com/59jz7or.png', }} />
        <Text style={styles.text}>Latitude: 41.44475076197903</Text>
        <Text style={styles.text}>Longitude: -73.93225027566297</Text>

        <Text style={styles.subHeading}>Location 4</Text>
        <Image style={styles.Image} source={{uri: 'https://i.imgur.com/aaXwKYA.png', }} />
        <Text style={styles.text}>Latitude: 41.44475076197903</Text>
        <Text style={styles.text}>Longitude: -73.93225027566297</Text>

        <Text style={styles.subHeading}>Location 5</Text>
        <Image style={styles.Image} source={{uri: 'https://i.imgur.com/AMUdrK6.png', }} />
        <Text style={styles.text}>Latitude: 44.4423476197903</Text>
        <Text style={styles.text}>Longitude: -73.256324227566297</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 340, 
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 32,
    color: 'black',
  },
  text: {
    fontSize: 15.5,
    color: 'black',
  },
});