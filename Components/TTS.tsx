import * as Speech from "expo-speech";

export default function TTS ({props}: any ) {
    return (
        Speech.speak(props.text)
    );
}