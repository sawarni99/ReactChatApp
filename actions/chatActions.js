const chatRequest = () => {
  return {
    type: "CHAT_REQUEST",
  };
};

const chatSuccess = (data, sender) => {
  return {
    type: "CHAT_SUCCESS",
    payload: data,
    sender: sender,
  };
};

const chatFailure = (data) => {
  return {
    type: "CHAT_FAILURE",
    payload: data,
  };
};

export const sendMsg = (socket, { msg, room }) => {
  return (dispatch, getState) => {
    dispatch(chatRequest());
    if (socket) {
      socket.emit("SEND_MSG", { msg, room }, (data) => {
        if (data.success) {
          dispatch(chatSuccess(msg, "you"));
        } else {
          dispatch(chatFailure(data.error));
        }
      });
    }
  };
};

export const rcvMsg = (socket) => {
  return (dispatch, getState) => {
    if (socket) {
      socket.on("RCV_MSG", ({ msg }) => {
        dispatch(chatSuccess(msg, "sender"));
      });
    }
  };
};
