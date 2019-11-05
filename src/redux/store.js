import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          name: 'Hennadii Petrov',
          post: " Hello how are you?",
          like: 2
        },
        {
          name: 'Ivan Golovchenko',
          post: " What's up world",
          like: 3
        },
        {
          name: 'Petrov Ruslan',
          post: " I will be happy",
          like: 1
        }
      ],
      newPostText: 'Java script'
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'}
      ],
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Where are you from'}
      ],
      newMessageText: 'Java script'
    }
  },
  _subscriber() {

  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._subscriber(this._state)
  },
  subscribe(callback) {
    this._subscriber = callback
  }
};


export {store};