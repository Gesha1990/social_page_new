import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    }
    default:
      return state;
  }
}
const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
const getCaptaraUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: captchaUrl});

export const myDataThunkCreator = () => (dispatch) => {
  return authAPI.getMyData()
    .then(data => {
        if (data.resultCode === 0) {
          let {userId, email, login} = data.data;
          dispatch(setUserData(userId, email, login, true));
        }
      }
    )
};
export const loginThunkCreator = (email, password, rememberMe = true, captcha) => (dispatch) => {
  console.log(email, password,rememberMe, captcha)
  return authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(myDataThunkCreator())
          console.log(response.data.resultCode)
        } else {
          if (response.data.resultCode === 10) {
            console.log(response.data.resultCode)
            dispatch(captchaThunkCreator())
          }
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
          dispatch(stopSubmit("login", {_error: message}))
        }

      }
    )
};

export const captchaThunkCreator = () => (dispatch) => {
  return securityAPI.getCaptchaUrl()
    .then(response => {
      const captchaUrl = response.data.url;
      dispatch(getCaptaraUrlSuccess(captchaUrl))
    })
};
export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
          }
        }
      )
  }
}

export default authReducer;