import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import Input from "../components/ChatInput";
import { sendMsg } from "../actions/chatActions";
import { connect } from "react-redux";

const Chat = ({ sendMsg, route, socketData, chatData }) => {
  const { name, room } = route.params;
  const socket = socketData.data;
  const [msg, setMsg] = useState("");

  // Sample messages....
  const listMessages = chatData.chats;
  console.log(listMessages);

  const onPressSend = () => {
    console.log(name, room);
    if (socket) {
      sendMsg(socket, { msg, room });
    }
  };

  return (
    <View style={styles.chat}>
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{room}</Text>
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
        <Input
          placeholder="Enter a message to send..."
          onSubmit={onPressSend}
          onChangeText={(value) => setMsg(value)}
          value={msg}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    socketData: state.socketData,
    chatData: state.chatData,
  };
};

export default connect(mapStateToProps, { sendMsg })(Chat);

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
