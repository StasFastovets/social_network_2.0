import { connect } from "react-redux"
import Login from "./login"
import { LogInAC } from "../../redux/authReducer"
import React from "react";

const LoginAPIContainer = (props) => {
   return (
      <Login {...props} />
   )
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}


const LoginContainer = connect(mapStateToProps, {LogInAC})(LoginAPIContainer)

export default LoginContainer
