import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function App({ navigation }: NativeStackHeaderProps) {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
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

  let coordinate = "Waiting..";
  if (errorMsg) {
    coordinate = errorMsg;
  } else if (location) {
    coordinate = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        userLocationUpdateInterval={500}
        userLocationFastestInterval={100}
        minZoomLevel={10}
        onPress={() => console.log(coordinate)}
        //onPress={(e) => console.log(e.nativeEvent.coordinate)}
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
