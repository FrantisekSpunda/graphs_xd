import reactLogo from './react_logo.svg';
import nodejsLogo from './nodejs_logo.svg';
import chartjsLogo from './chartjs_logo.svg';
import tailwindLogo from './tailwind_logo.svg';

const Technologies = () => {
	return (
		<>
			<h2 className='mt-24 font-bold'>Technologies</h2>
			<ul className='w-full flex gap-16 justify-center mt-4'>
				<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center'>
					<img src={reactLogo} className='w-8' alt='' />
				</li>
				<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center'>
					<img src={nodejsLogo} className='w-10' alt='' />
				</li>
				<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center'>
					<img src={chartjsLogo} className='w-10' alt='' />
				</li>
				<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center'>
					<img src={tailwindLogo} className='w-8' alt='' />
				</li>
			</ul>
		</>
	);
};

export default Technologies;
