import React from 'react';
import style from './Login.module.css'
import LoginReduxForm from "./LoginForm";
import {loginThunkCreator} from "../../redux/authReducer";
import  {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
const Login = (props) => {

  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };


  if(props.isAuth) return <Redirect to={'/profile/1428'}/>;
     return (
        <main className={style.main}>
          <div className={style.form}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
          </div>
        </main>
  )
}
let mapStateToPropsForRedirect = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToPropsForRedirect,{loginThunkCreator})(Login);