import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollowUserTC, setCurrentPage, getUsersTC, followUserTC, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getfollowingInProgress, getUsers, getPortionSize } from './../../redux/users_selectors';
import { useEffect } from 'react';



const UsersAPIContainer = ({ getUsersTC, setCurrentPage, ...props }) => {
   useEffect(() => {
      return getUsersTC(props.currentPage, props.pageSize)
   }, [])

   const onPageChanget = (page) => {
      setCurrentPage(page)
      getUsersTC(page, props.pageSize)
   }

   return (
      <Users {...props} onPageChanget={onPageChanget} />
   )
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getfollowingInProgress(state),
      portionSize: getPortionSize(state)
   }
}


const UsersContainer = connect(mapStateToProps, {
   follow, unfollow, setCurrentPage, unfollowUserTC, getUsersTC, followUserTC
})(UsersAPIContainer)

export default UsersContainer


