import * as axios from "axios/index";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': "f53dd099-72b7-4054-a5d2-3f81640a958e"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then(response => response.data)
  },

  followUser(userId) {

    return instance.post(`follow/${userId}`, {})
      .then(response => {
        return response.data
      })
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`, {})
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      }
      )
  },
  editUserProfile(fullName,lookingForAJob, lookingForAJobDescription, aboutMe,contacts ) {
    return instance.put(`profile/`, {fullName,lookingForAJob, lookingForAJobDescription, aboutMe, contacts })
      .then(response => {
          return response
        }
      )
  },
  editUserPhoto (photos){
    const formData = new FormData();
    formData.append('image', photos)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then( response => {
           return response
      })
  },
  getStatus(userId){
    return instance.get(`/profile/status/${userId}`)
      .then(response => {
        return response.data
      })
  },
  updateStatus(status) {
    return instance.put('/profile/status',{status: status})
  }

};
export const authAPI = {
  getMyData() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`,{email, password, rememberMe})
  },
  logout() {
    return instance.delete(`/auth/login`)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)

  }
}