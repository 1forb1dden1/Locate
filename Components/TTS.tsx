import * as Speech from "expo-speech";
import { View } from "react-native";

export default function TTS ({props}: any ) {
    return (
        Speech.speak(props.text)
    );
}