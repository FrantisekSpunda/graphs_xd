import logo from '../../assets/images/logo-256.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="w-full h-16 px-6 py-4 border-grey-100 border-b flex justify-between">
            <img src={logo} alt="logo" className='h-full' />
            <ul className='flex justify-between w-1/3 items-center'>
                <NavLink to='register' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>Register</span></NavLink>
                <NavLink to='login' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>Login</span></NavLink>
                <NavLink to='account' className={({isActive}) => isActive && 'underline'}><span className='text-sm font-medium'>matej.opicka</span></NavLink>
            </ul>
        </nav>
    )
  }
  
  export default Navbar;