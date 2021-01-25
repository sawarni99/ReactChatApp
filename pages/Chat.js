import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import Input from "../components/ChatInput";

const Chat = () => {
  // Sample messages....
  const listMessages = [
    { key: "1", sender: "you", message: "hii how are you" },
    { key: "2", sender: "gopi", message: "I am fine how are you" },
    {
      key: "3",
      sender: "you",
      message: "I will say blah blah then please replay blah blah....",
    },
    { key: "4", sender: "gopi", message: "OK I will reply blah blah..." },
    {
      key: "5",
      sender: "you",
      message: "My name is gopi bahu... say hello to me",
    },
    { key: "6", sender: "gopi", message: "Hello" },
    {
      key: "7",
      sender: "you",
      message:
        "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah !!!!",
    },
  ];

  return (
    <View style={styles.chat}>
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>Gopi Bahu</Text>
      </View>
      <View style={styles.chatArea}>
        <FlatList
          data={listMessages}
          renderItem={({ item }) => (
            <ChatMessage sender={item.sender} message={item.message} />
          )}
        />
      </View>
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
    height: 40,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatArea: {
    flex: 1,
    marginBottom: 75,
  },
  chatBox: {
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
