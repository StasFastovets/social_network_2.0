import { getAuth } from './../API/api';
import { logOut } from './../API/api';
import { logIn } from './../API/api';
import { getUserProfileTC, setUserProfileAC } from './profileReducer'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE = 'SET_PROFILE'


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload
         }
      case SET_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      default:
         return state
   }
}


const setUserDataAC = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

export const authTC = () => {
   return (
      (dispatch) => {
         return (
            getAuth().then(data => {
               if (data.resultCode === 0) {
                  let email = data.data.email
                  let id = data.data.id
                  let login = data.data.login
                  dispatch(setUserDataAC(id, email, login, true))
                  dispatch(getUserProfileTC(id))
               }
            })
         )
      }
   )
}

export const logOutTC = () => {
   return (
      (dispatch) => {
         return (
            logOut().then(data => {
               if (data.resultCode === 0) {
                  dispatch(setUserDataAC(null, null, null, false))
                  dispatch(setUserProfileAC(null))
               }
            })
         )
      }
   )
}

export const LogInTC = (email, password, rememberMe) => {
   return (
      (dispatch) => {
         return (
            logIn(email, password, rememberMe).then(data => {
               if (data.resultCode === 0) {
                  dispatch(authTC())
               }
            })
         )
      }
   )
}

export default authReducer