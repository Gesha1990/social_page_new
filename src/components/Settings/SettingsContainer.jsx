import React from 'react';
import style from './Settings.module.css'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {
  editProfileAC, editUserPhoto, editUserProfileThunkCreator, getUserProfileThunkCreator
} from "../../redux/profileReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {SettingsReduxForm} from "./SettingsForm";

class SettingsContainer extends React.Component {

  componentDidMount() {
this.props.getUserProfileThunkCreator(1428)
  }

  onSubmit = ({fullName,lookingForAJob, lookingForAJobDescription, aboutMe,github,vk, facebook,instagram, twitter, website, youtube, mainLink, photo}) =>{
console.log(photo)
   let сontacts = {
     github: github,
     vk: vk,
     facebook: facebook,
     instagram: instagram,
     twitter: twitter,
     website: website,
     youtube:youtube,
     mainLink: mainLink
   };
    this.props.editUserProfileThunkCreator(fullName,lookingForAJob, lookingForAJobDescription, aboutMe, сontacts )
}

  render(){

    return (
      <main className={style.main}>

       <SettingsReduxForm onSubmit={this.onSubmit}
                          initialValues={this.props.userProfile}
                          editProfile={this.props.editProfile}
                          editUserPhotos={this.props.editUserPhoto} />
      </main>
    )
  }

}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    editProfile: state.profilePage.editProfile
  }
}


export default compose(
  connect(mapStateToProps, {editUserProfileThunkCreator, editProfileAC, getUserProfileThunkCreator, editUserPhoto}),
  withRouter,
  withAuthRedirect
)(SettingsContainer);