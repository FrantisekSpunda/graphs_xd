import logo from '../../graphs_logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="w-full h-16 p-3 border-b border-gray-300 flex justify-between">
            <img src={logo} alt="logo" className='h-full' />

            <NavLink to='register' className={({ isActive }) => isActive && "underline"}>Register</NavLink>
            <NavLink to='login' className={({ isActive }) => isActive && "underline"}>Login</NavLink>
            <NavLink to='account' className={({ isActive }) => isActive && "underline"}>frantisek.spunda</NavLink>
        </header>
    );
  }
  
  export default Header;