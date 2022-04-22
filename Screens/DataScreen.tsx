import React, {useState} from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';\

// MapCam has a function called storeData() that will return the
// Location # 
// Altitude / Latitude / Longitude
// photo uri
// using this data we can create a new key everytime the function is called and store the data in this listItem variable.
let listItems = {
  info1: {
    id: "Location 1",
    latitude: 39.74475076197903,
    longitude: -75.57225027566297,
    uri: 'https://i.imgur.com/GqI8paA.png',
  },
  info2: {
    id: "Location 2",
    latitude: 42.24475076197903,
    longitude: -72.67225027566297,
    uri: 'https://i.imgur.com/wvyIo5f.png',
  },
  info3: {
    id: "Location 3",
    latitude: 41.44475076197903,
    longitude: -73.93225027566297,
    uri: 'https://i.imgur.com/59jz7or.png',
  },
  info4: {
    id: "Location 4",
    latitude: 41.44475076197903,
    longitude: -73.93225027566297,
    uri:'https://i.imgur.com/aaXwKYA.png',
  },
  info5: {
    id: "Location 5",
    latitude: 44.4423476197903,
    longitude: -73.256324227566297,
    uri: 'https://i.imgur.com/AMUdrK6.png',
  },
}
// add anther key into the listItems object.

export default function App({ navigation }: NativeStackHeaderProps) {
  return (
    //prevents the item from rendering outside of the screen.
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator = {false} showsVerticalScrollIndicator = {false}>
        {
          // map function will iterate through each object in the listItems object.
          Object.keys(listItems).map((key) => {
            const item = listItems[key];
            return (
              <View style={styles.Item} key={item.id}>
                <Text style={styles.subHeading}>{item.id}</Text>
                <Image style={styles.Image} source={{uri: item.uri}}/>
                <Text style={styles.text}>latitude: {item.latitude}</Text>
                <Text style={styles.text}>longitude: {item.longitude}</Text>
              </View>
            );
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  Image: {
    width: 320, 
    height: 250,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 25,
    color: 'black',
  },
  Item:{
    padding: 12,
    marginTop: 25,
    borderColor: '#000000',
    borderWidth: 2.5,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});