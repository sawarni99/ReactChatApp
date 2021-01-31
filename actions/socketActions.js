import io from "socket.io-client";
import { rcvMsg } from "./chatActions";

const socketRequest = () => {
  return {
    type: "SOCKET_REQUEST",
  };
};

const socketSuccess = (data) => {
  return {
    type: "SOCKET_SUCCESS",
    payload: data,
  };
};

const socketFailure = (data) => {
  return {
    type: "SOCKET_FAILURE",
    payload: data,
  };
};

export const connectSocket = (endpoint) => {
  return (dispatch, getState) => {
    dispatch(socketRequest());
    const socket = io(endpoint);
    socket.on("CONNECTION_ACK", () => {
      dispatch(socketSuccess(socket));
      dispatch(rcvMsg(socket));
    });
  };
};
