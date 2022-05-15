import { Ionicons, Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DataScreen from "../Screens/DataScreen";
import MapScreen from "../Screens/MapScreen";
import LoginScreen from "../Screens/LoginScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={LoginNavigator} options={{ headerShown: false, }} />
    </Stack.Navigator>
  );
}

const Login = createNativeStackNavigator();

function LoginNavigator() {
  return (
    <Login.Navigator>
      <Login.Screen name="Login" component={LoginScreen} options={{ headerShown: false, }} />
      <Login.Screen name="Home" component = {BottomTabNavigator} options={{ headerShown: false, }} />
    </Login.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="DataScreen" >
      <BottomTab.Screen name="Map" component={MapScreen} options={{ title: "Map", headerShown: false, tabBarIcon: () => (<Ionicons name="md-map-outline" size={18} color="black" /> ), }} />
      <BottomTab.Screen name="Data" component={DataScreen} options={{ title: "Data", headerShown: false, tabBarIcon: () => <Feather name="database" size={18} color="black" />,}} />
    </BottomTab.Navigator>
  );
}
