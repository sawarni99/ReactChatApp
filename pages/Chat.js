import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatMessage from "../components/ChatMessage";
import Input from "../components/CustomInput";

const Chat = () => {
  return (
    <View style={styles.chat}>
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>Gopi Bahu</Text>
      </View>
      <View style={styles.chatArea}></View>
      <View style={styles.chatBox}>
        <Input placeholder="Enter a message to send..." />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    backgroundColor: "#252525",
    flex: 1,
    opacity: 0.95,
  },
  chatDetails: {
    backgroundColor: "white",
    height: "8%",
    opacity: 0.7,

    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatArea: {
    height: "78%",
  },
  chatBox: {
    height: "15%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
