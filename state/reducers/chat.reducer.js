export const CHAT_ACTIONS = {
  SEND_MESSAGE: 'CHAT_ACTION.SEND_MESSAGE',
  RECEIVE_MESSAGE: 'CHAT_ACTION.RECEIVE_MESSAGE',
  RECEIVE_MESSAGES: 'CHAT_ACTION.RECEIVE_MESSAGES',
};

export const sendMessage = () => {
  return {
    type: CHAT_ACTIONS.SEND_MESSAGE,
  };
};

export const receiveMessage = message => {
  return {
    type: CHAT_ACTIONS.RECEIVE_MESSAGE,
    payload: message,
  };
};

export const receiveMessages = messages => {
  return {
    type: CHAT_ACTIONS.RECEIVE_MESSAGES,
    payload: messages,
  };
};

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  console.log('redu', action.type)
  switch (action.type) {
    case CHAT_ACTIONS.RECEIVE_MESSAGE:
      console.log('in add m', state.messages.length)
      return {
        ...state,
        messages: [].concat(action.payload, state.messages)
      };
    case CHAT_ACTIONS.RECEIVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};
