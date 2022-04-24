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
    Altitude: 10.720455694267734,
    Latitude: 40.71380544283957,
    Longitude: -74.00881754300812,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/61DB1633-2538-467C-81F1-63A2ABF39D5E.jpg',
   },
   
   
   info2: {
    id: "Location 2",
    Altitude: 10.760700813494623,
    Latitude: 40.71385489059841,
    Longitude: -74.0088784366515,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/002ED345-D1C1-4326-B376-8FAA92426FDA.jpg',
   },
   
   
   info3: {
    id: "Location 3",
    Altitude: 11.266017538495362,
    Latitude: 40.71395509352431,
    Longitude: -74.0089015310275,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/0FC9D957-3437-45C9-A6BF-DACB82827C63.jpg',
   },
   
   
   info4: {
    id: "Location 4",
    Altitude: 11.003849525935948,
    Latitude: 40.71413606571223,
    Longitude: -74.00874624194225,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/1FC0570F-B800-4C25-B1F0-DD4D2EC09875.jpg',
   },
   
   
   info5: {
    id: "Location 5",
    Altitude: 10.644745425321162,
    Latitude: 40.71421863076443,
    Longitude: -74.00863422850581,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/889F191D-BF67-4E2B-B33B-8E83C35D4F94.jpg',
   },
   
   
   info6: {
    id: "Location 6",
    Altitude: 11.295907265506685,
    Latitude: 40.71429011403406,
    Longitude: -74.00850088849084,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/BE4A9D62-1481-454E-9D1A-F86FD5BBA91E.jpg',
   },
   
   
   info7: {
    id: "Location 7",
    Altitude: 12.079403026029468,
    Latitude: 40.71440839403937,
    Longitude: -74.00841381479547,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/A27AF2CE-D776-4BAB-8878-8BCDE1FF4A91.jpg',
   },
   
   
   info8: {
    id: "Location 8",
    Altitude: 11.149690489284694,
    Latitude: 40.71456456430693,
    Longitude: -74.0083193267782,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/6A1FBB93-37C5-4CD7-96DB-06B3187002B8.jpg',
   },
   
   
   info9: {
    id: "Location 9",
    Altitude: 10.921007327735424,
    Latitude: 40.714734963002265,
    Longitude: -74.00819016456282,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/B20461D8-A45D-4F80-870C-2A344A8B5C9F.jpg',
   },
   
   
   info10: {
    id: "Location 10",
    Altitude: 10.518609157763422,
    Latitude: 40.71484360408369,
    Longitude: -74.00805981992626,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/9A579726-6C6A-4F84-9D74-00CAC3C47F7A.jpg',
   },
   
   
   info11: {
    id: "Location 11",
    Altitude: 10.628352374769747,
    Latitude: 40.71489882693771,
    Longitude: -74.00800856218908,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/923AF5FE-0BD9-420B-991D-8288B79C10C1.jpg',
   },
   
   
   info12: {
    id: "Location 12",
    Altitude: 11.567239206284285,
    Latitude: 40.71500695437815,
    Longitude: -74.00794372652315,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/D8425A13-EF16-4D81-9A4E-034416C18F18.jpg',
   },
   
   
   info13: {
    id: "Location 13",
    Altitude: 11.329077645204961,
    Latitude: 40.71508889460872,
    Longitude: -74.00783131638703,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/CA4761EC-80EF-4E05-81C4-D98F8E53DB6D.jpg',
   },
   
   
   info14: {
    id: "Location 14",
    Altitude: 10.934491496533155,
    Latitude: 40.71520016804161,
    Longitude: -74.00771413144663,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/2D67AE17-FC70-47B1-8159-12F0FF845D59.jpg',
   },
   
   
   info15: {
    id: "Location 15",
    Altitude: 9.827035019174218,
    Latitude: 40.715335295243,
    Longitude: -74.00757356623939,
    uri: 'file:///var/mobile/Containers/Data/Application/22E679C9-54D9-41BC-AAA3-767E7966F85C/Library/Caches/ExponentExperienceData/%2540forb1dden%252FGeoLocation/Camera/3770EF2B-A4C1-46BE-A577-B58862024A32.jpg',
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