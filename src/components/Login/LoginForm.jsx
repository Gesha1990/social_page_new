import React from 'react';
import style from './Login.module.css'
import { reduxForm} from "redux-form";
import Field from "redux-form/es/Field";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit} >
        <div>
          <Field component={TextArea} name={'email'} placeholder={'Email'} validate={[required, maxLength30]}/>
        </div>
        <div>
          <Field component={TextArea} name={'password'} placeholder={'Password'} validate={[required, maxLength30]}/>
        </div>
        <div>
          <Field component={'input'} name={'rememberMe'} type="checkbox" />Remember me
        </div>
        {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
        {props.captchaUrl && <Field component={TextArea} name={'captcha'} placeholder={'Captcha'} />}


        {props.error && <div className={style.summeryError}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>

  )
}

const LoginReduxForm  = reduxForm({form:'login'})(LoginForm);

export default LoginReduxForm;