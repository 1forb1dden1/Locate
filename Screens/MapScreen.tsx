import {  StyleSheet, View } from 'react-native';
import MapCam from "../Components/MapCam";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function App({}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <MapCam />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
});