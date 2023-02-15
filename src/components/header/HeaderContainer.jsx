import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authAC, logOutAC } from './../../redux/authReducer';
import { getUserProfileAC } from "../../redux/profileReducer";


const HeaderAPIContainer = (props) => {
   useEffect(() => { props.auth() }, [])
   return (
      <Header {...props} />
   )
}

let mapStateToProps = (state) => {
   return {
      id: state.auth.id,
      email: state.auth.email,
      login: state.auth.login,
      isAuth: state.auth.isAuth,
      photoSmall: state.auth.myProfile.photos.small
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      auth: () => dispatch(authAC()),
      logOut: () => dispatch(logOutAC()),
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainer