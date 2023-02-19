import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import Navigation from './components/navbar/navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';

const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navigation />
      <Routes>
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/profile/*' element={<ProfileContainer />} />
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/users/' element={<UsersContainer />} />
        {/* <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} /> */}
      </Routes>
    </div >
  );
}

export default App;
