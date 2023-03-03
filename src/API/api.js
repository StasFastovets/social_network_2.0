import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   headers: { "API-KEY": "3733710f-a079-4098-b86b-08f7856ef322" },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const getAuth = () => {
   return (
      instance.get(`auth/me`).then(response => response.data)
   )
}

export const getUser = (userID) => {
   return (
      instance.get(`profile/${userID}`).then(response => response.data)
   )
}

export const logOut = () => {
   return (
      instance.delete(`auth/login`).then(response => response.data)
   )
}

export const logIn = (email, password, rememberMe) => {
   return (
      instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
   )
}

export const getStatusOfUser = (userID) => {
   return (
      instance.get(`profile/status/${userID}`).then(response => response.data)
   )
}

export const updateStatusOfUser = (status) => {
   return (
      instance.put(`profile/status`, {status}).then(response => response.data)
   )
}

export const updateProfilePhoto = (photo) => {
   return (
      instance.put(`profile/photo`, { photo }).then(response => response.data)
   )
}

export const updateProfileData = (data) => {
   return (
      instance.put(`profile`, { ...data }).then(response => response.data)
   )
}

export const getUsers = (currentPage, pageSize) => {
   return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   )
}

export const followUser = (UserID) => {
   return (
      instance.post(`follow/${UserID}`).then(response => response.data)
   )
}

export const unfollowUser = (UserID) => {
   return (
      instance.delete(`follow/${UserID}`).then(response => response.data)
   )
}