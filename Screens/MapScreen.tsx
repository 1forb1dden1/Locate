import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Speech from "expo-speech";
import * as Location from "expo-location";

function TTS({ props }: any) {
  Speech.speak(props.text);
}

export default function App({ navigation }: NativeStackHeaderProps) {
  //Use State for the location and setting the current location.
  const [location, setLocation] = useState<any>(null);
  //errorMessage of type string and setting the current error message.
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // async allows us to wait until either the permission is granted or denied to continue.
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let coordinate = "System is loading...";
  if (errorMsg) {
    //TTS({text: "Currently Loading, press again later."});
    coordinate = errorMsg;
  } else if (location) {
    //TTS({text: "The current location is " + location.coords.latitude + ", " + location.coords.longitude});
    //coordinate = JSON.stringify(location);
    coordinate = JSON.stringify(
      "Altitude: " +
        location.coords.altitude +
        ", Latitude: " +
        location.coords.latitude +
        ", Longitude: " +
        location.coords.longitude
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map} // takes up the entire scren of the device given it's dimensions.
        showsUserLocation={true} // shows the user's location as a blue dot or circle on the map.
        followsUserLocation={true} // the map will follow the user's current location
        zoomEnabled={true} // allows the user to zoom in and out of the map.
        userLocationUpdateInterval={500} // every 500 ms or half a second the user's current location will be updated.
        minZoomLevel={10} // the mimimum zoom level of the map. (default is 0).
        onPress={() => console.log(coordinate)} // position of the coordinate based on user position.
        //onPress={(e) => console.log(e.nativeEvent.coordinate)} // position of the coordinate based on where the user clicks.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
