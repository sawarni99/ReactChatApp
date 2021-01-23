import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Button from "../components/CustomButton";
import Input from "../components/CustomInput";

export default function Home({ navigation }) {
  return (
    <View style={styles.homeView}>
      <Input placeholder="Enter a name..." />
      <Input placeholder="Enter a room..." />
      <Button>Join</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
