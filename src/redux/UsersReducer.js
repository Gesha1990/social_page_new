import {usersAPI} from "../api/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'set-users';
const SET_CURRENT_PAGE = 'set-current-page';
const SET_TOTAL_USERS_COUNT = 'set-total-users-count';
const SET_IS_FETCHING = 'set-is-fetching';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'toggle-is-following-progress';

let initialState = {
  users: [],
  portionSize: 8,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFatching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
      }
    default:
      return state
  }
}

const followAC = (id) => ({type: FOLLOW, id: id});
const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
const setUsersAC = (users) => ({type: SET_USERS, users});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const setIsFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const setIsFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
        dispatch(setIsFetchingAC(false));
      });
  }
};

export const followUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId));
    usersAPI.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followAC(userId))
        }
        dispatch(setIsFollowingProgress(false, userId));
      })
  }
};

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowAC(userId))
        }
        dispatch(setIsFollowingProgress(false, userId));
      })
  }
}


export default usersReducer;