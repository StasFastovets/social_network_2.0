import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/authRedirect';
import { getUserProfileTC } from './../../redux/profileReducer';
import { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';

const ProfileAPIContainer = (props) => {
   let { userID } = useParams()

   if (!userID) {
      userID = props.authorizedUserID
      // if (!userId) {
      //    this.props.history.push('/login')
      // }
   }

   useEffect(() => {
      props.getUserProfileTC(userID)
   }, [])

   return (
      <Profile {...props} />
   )
}

const authRedirectComponent = withAuthRedirect(ProfileAPIContainer)

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      authorizedUserID: state.auth.id,
      profile: state.profile.profile,
      status: state.profile.status,
   }
}

const ProfileContainer = connect(mapStateToProps, { getUserProfileTC })(authRedirectComponent)


export default ProfileContainer