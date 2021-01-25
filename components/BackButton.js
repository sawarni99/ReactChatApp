import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = ({ navigation }) => {
  const onClickBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.backButton} onPress={onClickBack}>
      <Ionicons name="arrow-back" size={25} color="white" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    margin: 10,
  },
});
