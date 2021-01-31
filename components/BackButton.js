import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

const BackButton = ({ navigation, socketData, route }) => {
  const socket = socketData.data;
  const { name } = route.params;
  const onClickBack = () => {
    if (socket) {
      socket.emit("LEAVE_ROOM", { name }, (data) => {
        if (data.success) {
          navigation.goBack();
        }
      });
    } else {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity style={styles.backButton} onPress={onClickBack}>
      <Ionicons name="arrow-back" size={25} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    socketData: state.socketData,
  };
};

export default connect(mapStateToProps)(BackButton);
