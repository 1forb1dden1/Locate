import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from '../firebase/firebase-config';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function LoginScreen( {navigation} : NativeStackHeaderProps ) {
const [SightedUser, setSightedUser] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => 
{
    const check = authentication.onAuthStateChanged(user =>{ 
        if(SightedUser === true) navigation.navigate('Home')
    })
    return check
}, [SightedUser]);

const Register = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re) => {
        console.log(re);
        setSightedUser(true);
    })
    .catch((err) => {
        console.log("error");
    })
}
const Login = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((re) => {
        console.log(re);
        setSightedUser(true);
    })
    .catch((err) => {
        console.log("error");
    })
}
return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.Subheading}>DoorFront</Text>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.input}/>
        <TextInput placeholder="Password" value={password} onChangeText={text => setPassword(text)}style={styles.input} secureTextEntry/>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={Login} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Register}style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Registered</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    )};
    
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
},
Subheading: {
    color: 'white',
    fontSize: 33,
    bottom: "15%",
},
inputContainer: {
    width: '80%',
    padding: 0,
},
input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 1,
    marginBottom: 15,
    backgroundColor: '#1a1918',
},
buttonContainer: {
    width: '78%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
},
button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 1,
    alignItems: 'center',
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 2,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
},
})