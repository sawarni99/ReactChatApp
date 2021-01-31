import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatInput = ({ onChangeText, placeholder, onSubmit, value }) => {
  return (
    <View style={styles.chatInputContainer}>
      <TextInput
        style={styles.chatInput}
        multiline
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={value}
      />
      <TouchableOpacity style={styles.chatSendIcon} onPress={onSubmit}>
        <Ionicons name="md-send-sharp" size={30} color="whitesmoke" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  chatInputContainer: {
    borderWidth: 2,
    borderColor: "gray",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  chatInput: {
    width: "100%",
    height: 45,
    flex: 1,
    padding: 10,
    fontSize: 15,
    color: "whitesmoke",
  },
  chatSendIcon: {
    padding: 10,
    justifyContent: "center",
  },
});
