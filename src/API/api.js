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