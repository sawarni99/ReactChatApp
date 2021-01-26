const initialState = {
  loading: false,
  data: null,
  error: false,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOCKET_REQUEST":
      return {
        ...state,
        loading: true,
        data: null,
        error: false,
      };
    case "SOCKET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case "SOCKET_FAILURE":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: true,
      };
    default:
      return state;
  }
};

export default socketReducer;
