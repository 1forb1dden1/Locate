import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Button, Alert } from "react-native";
import * as Location from "expo-location";
import TTS from "../Components/TTS";

export default function App() {
  const [playOnce, setPlayOnce] = useState<any>(false);
  const [permission, setPermission] = useState<any>(false);
  //const GOOGLE_MAPS_APIKEY = "AIzaSyCmJ_sgFGyvq50LG-jAI9WuZ9ktfsFQ58Q";

  // google ar view
  // altitude, latitude, longitude.
  var current_coordinate = {
    altitude: 0,
    latitude: 0,
    longitude: 0,
  };
  var liveMap = {
      mapRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
  }

  //const current_coordinate = [0, 0, 0];

  // this useffect will run once only when the application runs.
  useEffect(() => {
    if (playOnce === false) {
      setPlayOnce(true);
      TTS({
        props: {
          text: "The application has opened. Press anywhere on the map to store a location.",
        },
      });
    }
  }, []); // empty dependency so it only runs once even if the app re-renders.

  //permission for location and instantiates the current location.
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setPermission(false);
      } else {
        setPermission(true);
        // instantiate the current location
      }
    })();
  }, []);

  return (
    <View style={styles.Screen}>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        zoomEnabled={true}
        //zoomEnabled={true}
        // initial region is in the middle of new york.
        // needs to be updated so that it renders the users current location and then stores it as such. Then render map.
        initialRegion={{
          latitude: 40.68904679539984,
          longitude: -73.96551915826821,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}
        onUserLocationChange={(e) => {
          //console.log("Altitude: " + e.nativeEvent.coordinate.altitude + ", Latitude: " + e.nativeEvent.coordinate.latitude + ", Longitude: " + e.nativeEvent.coordinate.longitude);
          if (permission == true) {
            current_coordinate.altitude = e.nativeEvent.coordinate.altitude;
            current_coordinate.latitude = e.nativeEvent.coordinate.latitude;
            current_coordinate.longitude = e.nativeEvent.coordinate.longitude;
          }
        }}
        // on press it will save the latest coordinate that was registered in the system. For now it's just printing.
        onPress={() => {
          console.log(
            "Altitude: " +
              current_coordinate.altitude +
              ", Latitude: " +
              current_coordinate.latitude +
              ", Longitude: " +
              current_coordinate.longitude
          ); // just console.logs for now.
          if (
            current_coordinate.altitude === 0 || // 0 is if it is not rendered.
            current_coordinate.latitude === 0 || // 0 is if it is not rendered.
            current_coordinate.longitude === 0 // 0 is if it is not rendered.
          ) {
            TTS({ props: { text: "Press again in a few seconds" } });
          } else {
            TTS({ props: { text: "Location has been stored" } });
          }
        }}

        //<MapViewDirections>
        //origin = {{origin}}
        //destination = {{destination}}
        //apiKey = {GOOGLE_MAPS_APIKEY}
        //</MapViewDirections>

        //</View>
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
