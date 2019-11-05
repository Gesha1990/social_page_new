import React from 'react';
import style from './Posts.module.css'
import Post from "./Post/Post";
import SendPostReduxForm from "./SendPostForm";


const Posts = (props) => {

  let addPost = (formData) => {
  props.addPostAC(formData.post)
  };

  let postsElement = props.posts.map(p => <Post name={p.name} like={p.like} post={p.post}  key={p.id}/>)

  return (
    <div className={style.postsArea}>
      <SendPostReduxForm onSubmit={addPost}/>
      <div className={style.postsList}>
        {postsElement}
      </div>
    </div>

  )
}
export default Posts;