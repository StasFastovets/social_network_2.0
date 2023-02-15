import s from './header.module.css'
import logo from './../../img/logo.png'
import userPhoto from './../../img/images.jfif'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={s.body}>
      <div className={s.header}>
        <img src={logo} alt="#"></img>
        <div className={s.login_block}>
          {props.isAuth ?
            <div>
              <span className={s.login}> {props.login} </span>
              <img className={s.photo} src={props.photoSmall != null ? props.photoSmall : userPhoto} alt=""></img>
              <button className={`${s.login_link} ${s.logout_link}`} onClick={props.logOut}>LogOut</button>
            </div> :
            <NavLink className={s.login_link} to={'/Login'}>Login</NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Header;