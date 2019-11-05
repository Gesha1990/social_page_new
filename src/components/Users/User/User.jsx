import React from 'react';
import style from './User.module.css'
import userPhoto from '../../../assets/img/avaUsers.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {



  let unFollow = () => {
    props.unfollowThunkCreator(props.id)
  };

  let follow = () => {
    props.followUserThunkCreator(props.id)
  };

  return (
    <div className={style.user} key={props.id}>
      <div className={style.ava}><NavLink to={'/profile/' + props.id} ><img src={props.ava.small != null ? props.ava.small : userPhoto} alt="ava" className={style.userAva}/></NavLink></div>
      {props.followed? <button className={style.button} onClick={unFollow} disabled={props.followingInProgress.some(id => id===props.id)}>Unfollow</button> :
        <button className={style.button} onClick={follow} disabled={props.followingInProgress.some(id => id===props.id)}>Follow</button>}
      <div className={style.name}>{props.namne}</div>
      <div className={style.status}>{props.status}</div>
      <div className={style.location}>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </div>

  )

}
export default User;