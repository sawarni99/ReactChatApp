import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustomInput({ placeholder, onChangeText }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#747474",
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    fontSize: 19,
    width: "100%",
    margin: 10,
  },
});
