import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux'
import {logoutThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends  React.Component{

  render(){
    return (
     <Header isAuth={this.props.isAuth} login={this.props.login} logoutThunkCreator={this.props.logoutThunkCreator}/>
    )
  }
}
let mapStateToProps = (state) => {
  return{
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);