import Technologies from './Technologies';

import logo from './logo-512.png';

const Base = ({ children, heading }) => {
	return (
		<div className='flex flex-col items-center justify-center max-w-2xl h-full pt-24 px-2 mx-auto'>
			<img src={logo} alt='logo' className='w-full mb-5' />
			<h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

			<img src={heading} className='mb-4' alt='login' />

			{children}

			<Technologies />
		</div>
	);
};

export default Base;
