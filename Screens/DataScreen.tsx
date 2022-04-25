import React, {useState} from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';

// MapCam has a function called storeData() that will return the
// Location # 
// Altitude / Latitude / Longitude
// photo uri
// using this data we can create a new key everytime the function is called and store the data in this listItem variable.
let listItems = {
  info1: {
    id: "Location 1",
    Altitude: 8.736063003540039,
    Latitude: 40.72189380695997,
    Longitude: -73.9759567963931,
    uri: 'file:///var/mobile/Containers/Data/Application/C830031C-AE0A-4661-B91E-53E99BBE971E/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/A11A2DCC-3A08-4826-B966-6A9D72693336.jpg',
   },
   info2: {
    id: "Location 2",
    Altitude: 8.859796524047852,
    Latitude: 40.721919915470686,
    Longitude: -73.97587467554342,
    uri: 'file:///var/mobile/Containers/Data/Application/C830031C-AE0A-4661-B91E-53E99BBE971E/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/3DED6D6F-86F1-447A-8A71-1201DE99F4A2.jpg',
   },
   info3: {
    id: "Location 3",
    Altitude: 8.816969871520996,
    Latitude: 40.72194979517136,
    Longitude: -73.97592956075296,
    uri: 'file:///var/mobile/Containers/Data/Application/C830031C-AE0A-4661-B91E-53E99BBE971E/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/5D5D43DC-D8F5-4D33-9862-9CA9BEDA1131.jpg',
   },
};
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
                <Text style={styles.text}>Altitude: {item.Altitude}</Text>
                <Text style={styles.text}>latitude: {item.Latitude}</Text>
                <Text style={styles.text}>longitude: {item.Longitude}</Text>
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