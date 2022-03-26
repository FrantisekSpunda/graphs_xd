import { NavLink } from 'react-router-dom';

import logo from 'assets/images/icons/logo-256.png';
import profileImage from 'assets/images/profile/alex-profile-image.png';
import arrowDown from 'assets/images/icons/arrow2-down.png';

function Navbar() {
	return (
		<nav id='Navbar' className='w-full h-20 px-6 py-4 border-grey-100 border-b flex justify-between items-center'>
			<img src={logo} alt='logo' className='h-2/3' />
			<ul className='flex justify-between w-1/4 items-center'>
				<NavLink to='register' className='font-semibold text-sm'>
					Register
				</NavLink>
				<NavLink to='login' className='font-semibold text-sm'>
					Login
				</NavLink>

				<div className='h-full flex justify-between items-center w-48'>
					<img src={arrowDown} className='cursor-pointer w-5' alt='arrow right' />
					<NavLink to='account' className='font-semibold text-sm'>
						matej.opicka
					</NavLink>
					<img className='h-12 w-12 rounded-full' src={profileImage} alt='profile img' />
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;
