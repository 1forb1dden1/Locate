import GoogleMaps from "../Components/GoogleMap";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function App({ navigation }: NativeStackHeaderProps) {

  return (
    <GoogleMaps></GoogleMaps>
  );
}