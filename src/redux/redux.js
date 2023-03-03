import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import appReducer from "./appReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
   auth: authReducer,
   profile: profileReducer,
   app: appReducer,
   users: usersReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store