import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/authRedirect';
import { getUserProfileTC } from './../../redux/profileReducer';
import { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { updataStatusOfUserTC } from './../../redux/profileReducer';
import { getStatusOfUserTC } from './../../redux/profileReducer';

const ProfileAPIContainer = (props) => {
   let { userID } = useParams()

   if (!userID) {
      userID = props.authorizedUserID
   }

   useEffect(() => {
      props.getUserProfileTC(userID)
      props.getStatusOfUserTC(userID)
   }, [userID])

   return (
      <Profile {...props} />
   )
}

// const authRedirectComponent = withAuthRedirect(ProfileAPIContainer)

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      authorizedUserID: state.auth.id,
      profile: state.profile.profile,
      status: state.profile.status,
      isLoading: state.profile.isLoading,
   }
}

// const ProfileContainer = connect(mapStateToProps, { getUserProfileTC })(authRedirectComponent)


// export default ProfileContainer

export default compose(connect(mapStateToProps,
   { getUserProfileTC, updataStatusOfUserTC, getStatusOfUserTC }), withAuthRedirect)(ProfileAPIContainer)