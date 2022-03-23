import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="w-full h-16 px-6 py-4 border-b border-gray-100 flex justify-between">
            <img src={logo} alt="logo" className='h-full' />
            <ul className='flex justify-between w-1/2 items-center'>
                <NavLink to='register' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>Register</span></NavLink>
                <NavLink to='login' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>Login</span></NavLink>
                <NavLink to='account' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>matej.opicka</span></NavLink>
            </ul>
        </header>
    );
  }
  
  export default Header;