import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatMessage = ({ sender, message }) => {
  let chatMessageStyle = styles.chatMessageSender;
  let chatTextContainerStyle = styles.chatTextContainerSender;
  if (sender === "you") {
    chatMessageStyle = styles.chatMessage;
    chatTextContainerStyle = styles.chatTextContainer;
  }
  return (
    <View style={chatMessageStyle}>
      <View style={chatTextContainerStyle}>
        <Text style={styles.chatText}>{message}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  chatMessageSender: {
    margin: 10,
    alignItems: "flex-end",
  },
  chatMessage: {
    margin: 10,
  },
  chatTextContainer: {
    backgroundColor: "#80ffdb",
    borderRadius: 30,
    width: "80%",
    padding: 2,
  },
  chatTextContainerSender: {
    backgroundColor: "#64dfdf",
    borderRadius: 30,
    width: "80%",
    padding: 2,
    alignItems: "flex-end",
  },
  chatText: {
    fontSize: 17,
    margin: 10,
  },
});
