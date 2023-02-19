import { NavLink } from 'react-router-dom';
import item from './navbar.module.css';

const Navigation = () => {
   return (
      <nav className={item.nav}>
         <ul className={item.ul}>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/profile">Profile</NavLink></li>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/dialogs">Messages</NavLink></li>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/news">News</NavLink></li>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/music">Music</NavLink></li>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/users">Users</NavLink></li>
            <li className={item.li}><NavLink className={itemData => itemData.isActive ? item.active : item.link} to="/settings">Settings</NavLink></li>
         </ul>
      </nav >
   )
}

export default Navigation;