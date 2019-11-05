import React from 'react';
import Users from "./Users";
import {connect} from 'react-redux'
import Loader from "../common/Loader";
import {
  followUserThunkCreator, getUsersThunkCreator,
  unfollowThunkCreator
} from "../../redux/UsersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUserCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize)
  };


  render() {
    return <>
      {this.props.isFetching ? <Loader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize} users={this.props.users}
             currentPage={this.props.currentPage} unfollowThunkCreator={this.props.unfollowThunkCreator}
             followUserThunkCreator={this.props.followUserThunkCreator}
             onPageChanged={this.onPageChanged} followingInProgress={this.props.followingInProgress}
             setIsFollowingProgress={this.props.setIsFollowingProgress} portionSize={this.props.portionSize}
      />
    </>
  }

}



let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: state.usersPage.portionSize
  }
};

export default compose(
  connect(mapStateToProps, {
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowThunkCreator
  }),
  withAuthRedirect
)(UsersContainer);

