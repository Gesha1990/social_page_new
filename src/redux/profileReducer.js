import {profileAPI} from "../api/api";
import {stopSubmit} from 'redux-form'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const EDIT_PROFILE = 'EDIT-PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      name: 'Hennadii Petrov',
      post: " Hello how are you?",
      like: 2
    },
    {
      id: 2,
      name: 'Ivan Golovchenko',
      post: " What's up world",
      like: 3
    }

  ],
  newPostText: 'Java script',
  userProfile: null,
  status: '',
  editProfile: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        name: 'Hennadii Petrov',
        post: action.post,
        like: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: {...action.userProfile, ...action.userProfile.contacts},
      }
    }
    case  EDIT_PROFILE: {
      return {
        ...state,
        editProfile: action.done
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state;
  }
}

export const addPostAC = (post) => ({type: ADD_POST, post});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setStatusAC = (status) => ({type: SET_STATUS, status});
export const editProfileAC = (done) => ({type: EDIT_PROFILE, done});

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
};
export const editUserProfileThunkCreator = (fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts) => {
  return (dispatch) => {
    profileAPI.editUserProfile(fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(editProfileAC(true))
        }
        else if (response.data.resultCode !== 0) {
          console.log(response)
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "";
          dispatch(stopSubmit("settings", {_error: message}))

        }
      })
  }
};

export const editUserPhoto = (photos) => {
  return () => {
    profileAPI.editUserPhoto( photos)
      .then(response => {
        if (response.data.resultCode === 0) {
          console.log(response)
        }
        else if (response.data.resultCode !== 0) {
          console.log(response)
          // let message = response.data.messages.length > 0 ? response.data.messages[0] : "";
          // dispatch(stopSubmit("settings", {_error: message}))

        }
      })
  }
};
export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatusAC(response))
      })
  }
};

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatusAC(status))
        }
      })
  }
}


export default profileReducer;