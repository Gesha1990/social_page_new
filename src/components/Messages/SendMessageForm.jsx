import React from 'react';
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import style from './Messages.module.css'
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const SendMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={style.sendMessage}>
        <Field component={TextArea} placeholder={'Message'} name={'message'} validate={[required, maxLength50]} />
        <button>Send</button>
      </form>
  )
};
const SendMessageReduxForm = reduxForm({form: 'sendMessage'})(SendMessageForm);

export default SendMessageReduxForm;