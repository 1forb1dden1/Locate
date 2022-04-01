import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";

export default function DataScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>DataScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
  },
});
