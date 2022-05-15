import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Camera } from "expo-camera";
import { useAppDispatch } from '../Redux/hooks'
import { store } from "../Redux/store";
import TTS from "../Components/TTS";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [playOnce, setPlayOnce] = useState<boolean | null>(false);
  const [MapPermission, setMapPermission] = useState<boolean | null>(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<any>(null);
  const [SaveStatus, RequestSavePermission] = MediaLibrary.usePermissions();
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const dispatch = useAppDispatch();
  let current_coordinate = { altitude: 0, latitude: 0, longitude: 0};

  interface LocationValue {
    altitude: number,
    latitude: number;
    longitude: number;
    photoUri: string;
  }
  let data : LocationValue = {
    altitude: 0,
    latitude: 0,
    longitude: 0,
    photoUri: "",
  }


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
      const SaveStatus = await MediaLibrary.requestPermissionsAsync();
      RequestSavePermission();
      if (playOnce === false) {
        setPlayOnce(true);
        //TTS({props: {text: "Application Opened"}});
      }
    })();
  }, []);

  if (hasCameraPermission === null || SaveStatus === null) {
    return <View />;
  }
  if (hasCameraPermission === false || SaveStatus.granted === false) {
    return <Text>No access to camera</Text>;
  }

  function setLocation(){
    data.altitude = current_coordinate.altitude;
    data.latitude = current_coordinate.latitude;
    data.longitude = current_coordinate.longitude;
  };
  
  const takePicture = async () => {
    if (camera){
      const options = {quality: 1, skipProcessing:true, base64: true};
      let picture = await camera.takePictureAsync(options);
      data.photoUri = picture.uri;
      setImage(picture.uri);
    }
    if( data.photoUri !== "" && data.photoUri !== null)
    {
      setLocation();
      //TTS({ props: { text: "Data is set." } });
      dispatch({type: "setValue", payload: data});
      console.log(store.getState()); 
    }
  };

  return (
    <View style={styles.container}>
      <View style = {styles.container}>
      <Camera style={styles.camera} ref = {ref => setCamera(ref)} ratio = {'1:1'}>
          <TouchableOpacity style={styles.Button} onPress={() => takePicture()}>
              <Text style={styles.Text}>Take Picture</Text>
         </TouchableOpacity>
      </Camera>
      </View>
      <MapView
      style={styles.container}
      showsUserLocation={true}
      zoomEnabled={true}
      followsUserLocation={true}
      initialRegion={{
        latitude: 40.68904679539984,
        longitude: -73.96551915826821,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      }}
      onUserLocationChange={(param) => {
        if (MapPermission == true){ 
          current_coordinate.altitude = param.nativeEvent.coordinate.altitude;
          current_coordinate.latitude = param.nativeEvent.coordinate.latitude;
          current_coordinate.longitude = param.nativeEvent.coordinate.longitude;}
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  Button: {
    backgroundColor: '#1a1918',
    alignItems: 'center',
    justifyContent: 'center',
    width: "30%",
    height: 50,
    borderColor: 'white',
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 4,
    alignSelf: 'center',
    marginTop: 305,
  },
  Text: {
    color: 'white',
    fontSize: 12,
  }
});
