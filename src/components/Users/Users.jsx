import React from 'react';
import User from "./User/User";
import style from './Users.module.css';
import Paginator from "../common/Paginator";

let Users = (props) => {

  let usersItems = () => {
    return props.users.map(u => <User name={u.name} ava={u.photos} status={u.status}
                                      country={'u.location.country'}
                                      city={'u.location.city'} id={u.id} followed={u.followed}
                                      unfollowThunkCreator={props.unfollowThunkCreator}
                                      followUserThunkCreator={props.followUserThunkCreator}
                                      followingInProgress={props.followingInProgress}
                                      key={u.id}/>)
  }

  return (
    <main className={style.main}>

      <Paginator totalUsersCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 onPageChanged={props.onPageChanged}
                 currentPage={props.currentPage}
                 portionSize={props.portionSize}/>
      {usersItems()}
    </main>

  )
}

export default Users;