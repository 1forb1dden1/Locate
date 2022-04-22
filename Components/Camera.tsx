import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
 
export default function App(){
  const [hasCameraPermission, setHasCameraPermission] = useState<any>(null);
  const [hasSavePermission, setHasSavePermission] = useState<any>(null);
  const [camera, setCamera] = useState<any>(null);
  const [status, setrequestPermission] = MediaLibrary.usePermissions();
  const [image,setImage] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const  CameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraStatus.status === 'granted');
      const SaveStatus = await MediaLibrary.requestPermissionsAsync();
      setrequestPermission();
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
        console.log("picture:", assert)
        }else{
        console.log("miss a permission")
        }
      }
    }
  }
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
  if (hasCameraPermission === null || status === null) {
    return <View />;
  }
  if (hasCameraPermission === false || status.granted === false) {
    return <Text>No access to camera</Text>;
  }
  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => takePicture()}>
        <Camera style={styles.camera} ref = {ref => setCamera(ref)} ratio = {'1:1'} />
      </TouchableOpacity>
    </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 fixedRatio:{
  flex : 1,
  aspectRatio : 1
 },
 camera: {
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
   marginBottom: 10,
   color: 'white',
 },
});