const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'}
  ],
  messages: [
    {id: 1, message: 'hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Where are you from'}
  ]
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: action.message}]
      };
    }
    default:
      return state;

  }
};
export const sendMessageAC = (message) => ({type: SEND_MESSAGE, message});

export default messagesReducer;