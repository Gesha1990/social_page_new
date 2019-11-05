import React from 'react';
import style from './Posts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const SendPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={style.mainPost} >
      <div className={style.avaPost}></div>
      <Field component={TextArea} placeholder={'post'} name={'post'} validate={[required, maxLength50]}/>
      <button>Send post</button>
    </form>

  )
}
const SendPostReduxForm = reduxForm({form: 'sendPost'})(SendPostForm);

export default SendPostReduxForm;