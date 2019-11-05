import React from 'react';

import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import  users from '../../assets/img/icons/group-users_icon.svg';
import  messages from '../../assets/img/icons/messages.svg';
import  profile from '../../assets/img/icons/user-shape.svg';
import  alien from '../../assets/img/icons/alien.svg';
import  settings from '../../assets/img/icons/settings.svg';
import  login from '../../assets/img/icons/login.svg';
import  logout from '../../assets/img/icons/logout.svg';

const Header = (props) => {

  let logOut = () => {
    return props.logoutThunkCreator()
  };

  return (
      <header>
        <div className={style.logo}>
          <img src={alien} alt="logo" className={style.icon}/>
        </div>
        <nav>
          <NavLink to="/profile/1428"><img src={profile} alt="me" className={style.icon}/></NavLink>
          <NavLink to="/messages"><img src={messages} alt="messages " className={style.icon}/></NavLink>
          <NavLink to={"/settings"}><img src={settings} alt="settings" className={style.icon}/></NavLink>
          <NavLink to="/users"><img src={users} alt="users" className={style.icon}/></NavLink>
          {props.isAuth? <NavLink to='/login'><img  src={logout} alt="logout" className={style.icon} onClick={logOut}/><span className={style.login}>{props.login}</span></NavLink>:
            <NavLink to='/login' ><img src={login} alt="users" className={style.icon}  /></NavLink>}

        </nav>
      </header>
  )
}
export default Header;