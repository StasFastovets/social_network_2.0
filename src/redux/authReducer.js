import { getAuth } from './../API/api';
import { logOut } from './../API/api';
import { logIn, getUser } from './../API/api';
import { getUserProfileTC, setUserProfileAC } from './profileReducer'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_PROFILE = 'auth/SET_PROFILE'
const IS_LOADING = 'auth/IS_LOADING'
const SET_USER = 'auth/SET_USER'


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   isLoading: false,
   profile: {
      photos: {
         small: null
      }
   },
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
      case IS_LOADING:
         return {
            ...state,
            isLoading: action.isLoading
         }
      case SET_USER:
         return {
            ...state,
            profile: action.profile
         }
      default:
         return state
   }
}


const setUserDataAC = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
const setIsLoadingAC = (isLoading) => ({ type: IS_LOADING, isLoading })
const setUserAC = (profile) => ({ type: SET_USER, profile })

// export const authTC = () => {
//    return (
//       (dispatch) => {
//          return (
//             getAuth().then(data => {
//                if (data.resultCode === 0) {
//                   let email = data.data.email
//                   let id = data.data.id
//                   let login = data.data.login
//                   dispatch(setUserDataAC(id, email, login, true))
//                   // dispatch(getUserProfileTC(id))
//                }
//             })
//             getUser(id).then(data => {
//                dispatch(setUserProfileAC(data))
//             })
//          )
// }
//    )
// }

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
                  return getUser(id).then(data => {
                     dispatch(setUserAC(data))
                  })
               }
            })
         )
      }
   )
}

export const logOutTC = () => {
   return (
      (dispatch) => {
         dispatch(setIsLoadingAC(true))
         return (
            logOut().then(data => {
               if (data.resultCode === 0) {
                  dispatch(setUserDataAC(null, null, null, false))
                  // dispatch(setUserProfileAC(null))
                  dispatch(setIsLoadingAC(false))
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