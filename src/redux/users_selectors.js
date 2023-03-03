import { createSelector } from 'reselect';

const getUsers = (state) => {
   return state.users.users
}

// export const getUsersSelector = (state) => { 
//    return getUsers(state).filter(user => true)
//  }

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
   return users.filter(user => true)
})



export const getPageSize = (state) => {
   return state.users.pageSize
}

export const getTotalUsersCount = (state) => {
   return state.users.totalUsersCount
}

export const getCurrentPage = (state) => {
   return state.users.currentPage
}

export const getIsFetching = (state) => {
   return state.users.isFetching
}

export const getfollowingInProgress = (state) => {
   return state.users.followingInProgress
}

export const getPortionSize = (state) => {
   return state.users.portionSize
}