import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6930c3",
    height: 45,
    width: "50%",
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
