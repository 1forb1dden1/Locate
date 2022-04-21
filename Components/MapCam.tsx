import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Camera } from "expo-camera";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import TTS from "../Components/TTS";
import * as Location from "expo-location";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [playOnce, setPlayOnce] = useState<boolean | null>(false);
  const [MapPermission, setMapPermission] = useState<boolean | null>(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<any>(null)
  const [SaveStatus, RequestSavePermission] = MediaLibrary.usePermissions();
  const [camera, setCamera] = useState<any>(null)
  const [image, setImage] = useState<any>(null)

  var current_coordinate = {
    altitude: 0,
    latitude: 0,
    longitude: 0,
  };

  useEffect(() => {
    if (playOnce === false) {
      setPlayOnce(true);
      TTS({props: {text: "The application has opened. Press anywhere on the map to store a location."}});
    }
  }, []);

  useEffect(() => {
    (async () => {
      const  CameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraStatus.status === 'granted');
      let MapPermission = await Location.requestForegroundPermissionsAsync();
      if (MapPermission.status !== "granted") {
        setMapPermission(false);
      } else {
        setMapPermission(true);
      }
      //const SaveStatus = await MediaLibrary.requestPermissionsAsync();
      //setSavePermission(SaveStatus.status === 'granted');
      RequestSavePermission();
    })();
  }, []);

  const takePicture = async () => {
    if (camera){
      const options = {quality: 1, skipProcessing:true}
      let data = await camera.takePictureAsync(options);
      console.log(data.uri)
      setImage(data.uri);
      const status = await MediaLibrary.getPermissionsAsync(true);
      console.log(status);
      if (status === null){
          return;
        }
      else{
        if (status.status === "granted"){
        const assert = await MediaLibrary.saveToLibraryAsync(data.uri);
        }
        else{
        TTS({props: {text: "Missed a Permission. Please check your permission."}});
        console.log("Missed a Permission")
        }
      }
    }
  }

  function storeLocation(){
    console.log(
        "Altitude: " +
        current_coordinate.altitude +
        ", Latitude: " +
        current_coordinate.latitude +
        ", Longitude: " +
        current_coordinate.longitude
    ); 
    if (current_coordinate.altitude === 0 || current_coordinate.latitude === 0 || current_coordinate.longitude === 0 ){
      TTS({ props: { text: "Press again in a few seconds" } });
    } else {
      TTS({ props: { text: "Location has been stored" } });
    }
  };
  // might not be necessary to pickImage.
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (hasCameraPermission === null || SaveStatus === null) {
    return <View />;
  }
  if (hasCameraPermission === false || SaveStatus.granted === false) {
    return <Text>No access to camera</Text>;
  }

  function CombinedPress()
  {
    console.log(SaveStatus);
    storeLocation();
    takePicture();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => CombinedPress()}>
      <Camera style={styles.camera} ref = {ref => setCamera(ref)} ratio = {'1:1'} />
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      showsUserLocation={true}
      zoomEnabled={true}
      // initial region is in the middle of new york.
      // needs to be updated so that it renders the users current location and then stores it as such. Then render map.
      initialRegion={{
        latitude: 40.68904679539984,
        longitude: -73.96551915826821,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      }}
      onUserLocationChange={(e) => {
        if (MapPermission == true) {
          current_coordinate.altitude = e.nativeEvent.coordinate.altitude;
          current_coordinate.latitude = e.nativeEvent.coordinate.latitude;
          current_coordinate.longitude = e.nativeEvent.coordinate.longitude;
        }
      }}
    />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    // the reason why the flex is so small is because the camera has to actually be rendered on the screen in order to 
    // utilize the function.
    flex: 0.75,
  },
});
