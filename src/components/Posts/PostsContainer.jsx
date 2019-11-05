import {addPostAC} from "../../redux/profileReducer";
import Posts from "./Posts";
import  {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const PostsContainer = connect(mapStateToProps, {addPostAC})(Posts);

export default PostsContainer;