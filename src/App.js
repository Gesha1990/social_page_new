import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from 'react-redux'
import {initializeAPPThunkCreator} from "./redux/appReducer";
import Loader from "./components/common/Loader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";
import SettingsContainer from "./components/Settings/SettingsContainer";

const MessagesContainer = React.lazy(() => import ("./components/Messages/MessagesContainert"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));

class App extends React.Component {


  componentDidMount() {
    this.props.initializeAPPThunkCreator()
  }

  render() {
    if (!this.props.initializing) return <Loader/>
    return (
      <div className='wrapper'>
        <HeaderContainer/>
        <Route path='/messages' render={withSuspense(MessagesContainer)}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/users' render={withSuspense(UsersContainer)}/>
        <Route path='/settings' render={withSuspense(SettingsContainer)}/>
        <Route path='/login' render={() => <Login/>}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  initializing: state.app.initializing
})
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeAPPThunkCreator})
)(App);
