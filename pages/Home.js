import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Button from "../components/CustomButton";
import io from "socket.io-client";
import Input from "../components/CustomInput";

export default function Home({ navigation }) {
  // Initializations...
  const [socket, setSocket] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    room: "",
    joinClicked: false,
  });
  const ENDPOINT = "http://192.168.29.112:2500";
  const SUCCESS_MESSAGE = "Join a room";

  // Destructuring data...
  const { name, room, joinClicked, roomJoined } = inputs;

  // Connecting to socket....
  useEffect(() => {
    const socketIO = io(ENDPOINT);
    socketIO.on("CONNECTION_ACK", () => {
      setSocket(socketIO);
    });
  }, [ENDPOINT]);

  // Joining a room...
  useEffect(() => {
    if (joinClicked && name !== "" && room !== "") {
      if (socket) {
        socket.emit("JOIN_ROOM", { name, room }, (data) => {
          console.log(data);
          if (data === SUCCESS_MESSAGE) {
            navigation.navigate("Chat", { socket });
          }
        });
      }
      setInputs({ room: "", name: "", joinClicked: false });
    }
  });

  return (
    <View style={styles.homeView}>
      <Input
        placeholder="Enter a name..."
        onChangeText={(text) => setInputs({ ...inputs, name: text })}
        value={name}
      />
      <Input
        placeholder="Enter a room..."
        onChangeText={(text) => setInputs({ ...inputs, room: text })}
        value={room}
      />
      <Button onPress={() => setInputs({ ...inputs, joinClicked: true })}>
        Join
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#252525",
    opacity: 0.95,
  },
});
