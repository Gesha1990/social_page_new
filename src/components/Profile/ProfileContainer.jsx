import React from 'react';
import style from './Profile.module.css'
import PostsContainer from "../Posts/PostsContainer";
import commonAva from '../../assets/img/avaUsers.jpg'
import {connect} from 'react-redux'
import Loader from "../common/Loader";
import {withRouter} from "react-router-dom";
import {getStatusThunkCreator, getUserProfileThunkCreator, updateStatusThunkCreator} from "../../redux/profileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import ProfileInfo from "./ProfileInfo";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  };

  componentDidUpdate(prevProps) {
    let userId = this.props.match.params.userId;
    if (prevProps.match.params.userId !== userId) {
      this.refreshProfile()
    }
  };

  render() {

    if (!this.props.userProfile) {
      return <Loader/>
    }

    return (
      <main className={style.main}>
        <div className={style.bgImg}>
        </div>
        <aside>
          <img src={this.props.userProfile.photos.large || commonAva} className={style.ava} alt='ava'/>
          <ProfileInfo contacts={this.props.userProfile.contacts}
                       userProfile={this.props.userProfile}
                       status={this.props.status}
                       updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>
        </aside>
        <PostsContainer/>
      </main>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
  }
};


export default compose(
  connect(mapStateToProps, {getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);