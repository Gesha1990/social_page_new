import React from 'react';
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  let Contacts = () => {

    let contactsArray =  Object.keys(props.contacts).filter(key=> {
      let checkingForEmptyContactsValue =props.contacts[key] !== null && props.contacts[key].length > 0;
      if(checkingForEmptyContactsValue) {
        return key
      }

    }).map(key => {
      return <div  key={key}className={style.contact}><b>{key}:</b> {props.contacts[key]}</div>
    });
    return contactsArray
  };

  return (
    <div className={style.info}>
      <div><b>Name:</b> {props.userProfile.fullName}</div>
      <div><b>About me:</b> {props.userProfile.aboutMe}</div>
      <div><b>Looking for a job:</b> {props.userProfile.lookingForAJob? 'Yes': 'No'}</div>
      <b>Contacts:</b>
      {Contacts()}
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatusThunkCreator}/>
    </div>

  )
}
export default ProfileInfo;