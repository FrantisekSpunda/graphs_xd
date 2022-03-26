import Tooltip from 'views/components/tooltip/Tooltip';

import reactLogo from './react_logo.svg';
import nodejsLogo from './nodejs_logo.svg';
import chartjsLogo from './chartjs_logo.svg';
import tailwindLogo from './tailwind_logo.svg';

const Technologies = () => {
	return (
		<>
			<h2 className='font-bold mt-[30vh]'>Technologies</h2>
			<ul className='w-full flex gap-16 justify-center mt-8'>
				<Tooltip text={'React.js'} event='hover'>
					<a href='https://reactjs.org/'>
						<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<img src={reactLogo} className='w-8' alt='' />
						</li>
					</a>
				</Tooltip>
				<Tooltip text={'Node.js'} event='hover'>
					<a href='https://nodejs.org/en/'>
						<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<img src={nodejsLogo} className='w-10' alt='' />
						</li>
					</a>
				</Tooltip>

				<Tooltip text={'Chart.js'} event='hover'>
					<a href='https://www.chartjs.org/'>
						<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<img src={chartjsLogo} className='w-10' alt='' />
						</li>
					</a>
				</Tooltip>

				<Tooltip text={'Tailwind'} event='hover'>
					<a href='https://tailwindcss.com/'>
						<li className='bg-grey-100 rounded-full w-16 h-16 flex justify-center items-center transition-transform hover:scale-110 cursor-pointer'>
							<img src={tailwindLogo} className='w-8' alt='' />
						</li>
					</a>
				</Tooltip>
			</ul>
		</>
	);
};

export default Technologies;
