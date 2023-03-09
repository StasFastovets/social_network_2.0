import logo from './logo.svg';
import './App.css';
import { Route, Routes, useHistory } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import Navigation from './components/navbar/navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import LoginInfo from './components/login/login_info';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { InitializedAppTC } from './redux/appReducer';
import Preloader from './components/other/preloader/preloader';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/not_found_page/NotFoundPage';


const App = (props) => {

  useEffect(() => {
    props.InitializedAppTC()
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='navigation-app'>
        <Navigation />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile/:userID' element={<ProfileContainer />} />
        <Route path='/profile/' element={<ProfileContainer />} />
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/users/' element={<UsersContainer />} />
        <Route path='/login' element={<LoginInfo />} />
        {/* <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}


let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = connect(mapStateToProps, { InitializedAppTC })(App)

export default AppContainer;
