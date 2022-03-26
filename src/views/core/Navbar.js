import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo-256.png';
import profileImage from '../../assets/images/profile/alex-profile-image.png'
import arrowDown from '../../assets/images/arrow2-down.png'

function Navbar() {
    const navLinkClass = 'font-semibold text-sm '

    return (
        <nav id='Navbar' className="w-full h-16 px-6 py-4 border-grey-100 border-b flex justify-between items-center">
            <img src={logo} alt="logo" className='h-full' />
            <ul className='flex justify-between w-1/4 items-center'>
                <NavLink to='register' className={({isActive}) => isActive ? navLinkClass + 'border-b border-gray-300' : navLinkClass}>Register</NavLink>
                <NavLink to='login' className={({isActive}) => isActive ? 'border-b border-gray-300' : navLinkClass}>Login</NavLink>
                <div className='h-full flex justify-between items-center w-48'>
                    <img src={arrowDown} className='cursor-pointer w-5' alt="arrow right" />
                    <NavLink to='account' className={({isActive}) => isActive ? navLinkClass + 'border-b border-gray-300' : navLinkClass}>matej.opicka</NavLink>
                    <img className='h-12 w-12 rounded-full' src={profileImage} alt="profile img" />

                </div>
            </ul>
        </nav>
    )
  }
  
  export default Navbar;