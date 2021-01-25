import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustomInput({ placeholder, onChangeText, value }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor="gray"
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    fontSize: 19,
    width: "100%",
    margin: 10,
    color: "whitesmoke",
  },
});
