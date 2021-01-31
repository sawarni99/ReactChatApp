const initialState = {
  loading: false,
  chats: [],
  key: 0,
  error: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHAT_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CHAT_SUCCESS":
      let chatList = state.chats;
      chatList.push({
        key: state.key.toString(),
        sender: action.sender,
        message: action.payload,
      });

      return {
        ...state,
        loading: false,
        chats: chatList,
        key: state.key + 1,
        error: false,
      };
    case "CHAT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
