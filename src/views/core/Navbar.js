import logo from '../../assets/images/logo-256.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const navLinkClass = 'font-semibold text-sm '

    return (
        <nav className="w-full h-16 px-6 py-4 border-grey-100 border-b flex justify-between">
            <img src={logo} alt="logo" className='h-full' />
            <ul className='flex justify-between w-1/3 items-center'>
                <NavLink to='register' className={({isActive}) => isActive ? navLinkClass + 'border-b border-gray-300' : navLinkClass}>Register</NavLink>
                <NavLink to='login' className={({isActive}) => isActive ? 'border-b border-gray-300' : navLinkClass}>Login</NavLink>
                <NavLink to='account' className={({isActive}) => isActive ? navLinkClass + 'border-b border-gray-300' : navLinkClass}>matej.opicka</NavLink>
            </ul>
        </nav>
    )
  }
  
  export default Navbar;