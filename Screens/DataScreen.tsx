import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity, RefreshControl, TextInput, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { useAppSelector, useAppDispatch } from '../Redux/hooks'
import React, {useState} from 'react'

let listItems = {
  info1: {
    id: "Store Name", 
    Altitude: 0,
    Latitude: 0,
    Longitude: 0,
    uri: "x"
   },
};

export default function App( { }: NativeStackHeaderProps) {
  
  const data = useAppSelector( (state) => state.location);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [storeName, setStoreName] = useState("Store Name");
  
  const onRefresh = () => {
    setRefreshing(true);
    dispatch({type: "setValue", payload: data});
    listItems.info1.id = storeName;
    listItems.info1.Altitude = data.altitude;
    listItems.info1.Latitude = data.latitude;
    listItems.info1.Longitude = data.longitude;
    if(data.photoUri !== "" || data.photoUri !== null) 
    {
      listItems.info1.uri = data.photoUri;
    }
    setRefreshing(false);
  }
  function pushed()
  {
    console.log("\n\nPushed");
    console.log("Altitude: " + data.altitude);
    console.log("Latitude: " + data.latitude);
    console.log("Longitude: " + data.longitude);
    console.log("Photo Uri: " + data.photoUri);
  }
  function changeLabel(props: string)
  {
    setStoreName(props);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} >
      <ScrollView
      refreshControl={ <RefreshControl refreshing = {refreshing}onRefresh = {onRefresh} /> }
      showsHorizontalScrollIndicator = {false} 
      showsVerticalScrollIndicator = {false}
      >
        <View style={styles.Item}>
          <Text style={styles.subHeading}>{listItems.info1.id}</Text>
          <Image style={styles.Image} source={{uri: listItems.info1.uri}}/>
          <Text style={styles.ItemText}>Altitude: {listItems.info1.Altitude}</Text>
          <Text style={styles.ItemText}>Latitude: {listItems.info1.Latitude}</Text>
          <Text style={styles.ItemText}>Longitude: {listItems.info1.Longitude}</Text>
        </View>
      </ScrollView>
      <Text style={styles.textInput}>Enter Store Name</Text>
      <TextInput 
      style ={styles.input} 
      placeholder = "e.g. Chase Bank" 
      placeholderTextColor ="#39383b"
      onSubmitEditing={(event) => {
        changeLabel(event.nativeEvent.text);
        onRefresh();
      }}
      clearButtonMode = "always"
      />
      </KeyboardAvoidingView>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity style={styles.Button} onPress={() => pushed()}>
          <Text style={styles.Text}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => onRefresh()}>
          <Text style={styles.Text}>Reload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Image: {
    width: 350, 
    height: 250,
  },
  textInput: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    color: 'white',
    borderWidth: 2,
    borderColor: '#292827',
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: '#1a1918',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050505',
  },
  subHeading: {
    marginBottom: 15,
    fontSize: 25,
    color: 'white',
    padding: 12,
    backgroundColor: '#1a1918',
    borderColor: '#292827',
    borderWidth: 2,
    borderRadius: 0,
  },
  Item:{
    padding: 0,
    marginTop: 10,
    borderColor: '#1a1918',
  },
  ItemText:{
    marginTop: 15,
    fontSize: 14,
    color: 'white',
    padding: 13,
    backgroundColor: '#1a1918',
    borderColor: '#292827',
    borderWidth: 2,
    borderRadius: 0,
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
  },
  Text: {
    color: 'white',
    fontSize: 12,
  }
});