import React from 'react';
import style from './Settings.module.css';
import {TextArea} from "../common/FormsControls/FormsControls";
import Field from "redux-form/es/Field";
import {required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";


const SettingsForm = (props) => {

  
 const onChange = (e) => {
   props.editUserPhotos(e.target.files[0])

  }

  return (
    <form className={style.settings} onSubmit={props.handleSubmit}>
      <div className={style.mainInfo}>
        <div>
          Full name: <br/>
          <Field  component={TextArea} name={'fullName'} validate={[required]}></Field>
        </div>
        <div>
          Looking for a job: <br/>
          <Field component={'input'} type={'checkbox'} name={'lookingForAJob'} ></Field>
        </div>
        <input type="file" name="photo" id="file" className={style.inputfile} onChange={onChange}/>
        <label htmlFor="file">Photo</label>

        </div>
      <div>
        About me: <br/>
        <Field  className={style.mainField } component={TextArea} type={'input'} name={'aboutMe'}  validate={[required]}></Field>
      </div>
      <div>
        Photo Url:<br/>
        <Field className={style.mainField } component={TextArea} type={'input'} name={'small'} ></Field>
      </div>
      <div>
        Job description: <br/>
        <Field className={style.mainField } component={TextArea} type={'input'}name={'lookingForAJobDescription'} validate={[required]}></Field>
      </div>
      <div className={style.contacts}>

        <div>
          GitHub:<br/>
          <Field className={style.contact } component={TextArea} name={'github'}></Field>
        </div>
        <div>
          Vk:<br/>
          <Field  className={style.contact } component={TextArea} name={'vk'}></Field>
        </div>
        <div>
          Facebook:<br/>
          <Field  className={style.contact } component={TextArea} name={'facebook'}></Field>
        </div>
        <div>
          Instagram:<br/>
          <Field className={style.contact } component={TextArea} name={'instagram'}></Field>
        </div>
        <div>
          Twitter:<br/>
          <Field className={style.contact } component={TextArea} name={'twitter'}></Field>
        </div>
        <div>
          Website:<br/>
          <Field className={style.contact } component={TextArea} name={'website'}></Field>
        </div>
        <div>
          Youtube:<br/>
          <Field className={style.contact } component={TextArea}  name={'youtube'}></Field>
        </div>
        <div>
          MainLink:<br/>
          <Field className={style.contact } component={TextArea} name={'mainLink'}></Field>
        </div>
      </div>
      {props.error && <div  className={style.summeryError}>
        {props.error}
      </div>}
      {props.editProfile && <div className={style.done}>"DONE"</div>}

      <div >
        <button className={style.saveBtn}>Save</button>
      </div>
    </form>
  )
}

export const SettingsReduxForm = reduxForm({form: 'settings'})(SettingsForm)