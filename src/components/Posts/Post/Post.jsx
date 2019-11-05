import React from 'react';
import style from './Post.module.css'
import  like from '../../../assets/img/icons/like.svg'

const Post = (props) => {


  return (
        <div className={style.post} >
          <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/25/1498216547-avatar-neytiri.jpg"
               alt="ava" className={style.ava}/>
          <div className={style.name}>{props.name}</div>
          <div  className={style.icon}><img src={like} alt="like"/>{props.like}</div>

          <div className={style.textContent}>{props.post}</div>
        </div>
  )
}
export default Post;