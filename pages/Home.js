import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Button from "../components/CustomButton";
import Input from "../components/CustomInput";
import { connectSocket } from "../actions/socketActions";

function Home({ navigation, connectSocket, socketData }) {
  // Initializations...
  let socket = null;
  const [inputs, setInputs] = useState({
    name: "",
    room: "",
  });
  const ENDPOINT = "http://192.168.29.112:2500";

  // Destructuring data...
  const { name, room } = inputs;

  // Getting socket...
  if (!socketData.error) {
    socket = socketData.data;
  }

  // Connecting to socket....
  useEffect(() => {
    connectSocket(ENDPOINT);
  }, [ENDPOINT]);

  // Joining a room...
  const onPressJoin = () => {
    if (socket) {
      socket.emit("JOIN_ROOM", { name, room }, (data) => {
        if (data.success) {
          navigation.navigate("Chat", { name, room });
        }
      });
    }
  };

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
      <Button onPress={onPressJoin}>Join</Button>
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

const mapStateToProps = (state) => {
  return {
    socketData: state.socketData,
  };
};

export default connect(mapStateToProps, { connectSocket })(Home);
