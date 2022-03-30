import Step1Graph from './Step1Graph';

import barChart from 'assets/images/charts/bar.png';
import ringChart from 'assets/images/charts/ring.png';

function Step1({ onAdd }) {
	return (
		<>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Choose type</h2>
			<h3 className='text-orange-900 font-semibold mb-2 w-1/3 border-b border-grey-100'>CIRCLE GRAPHS</h3>
			<ul className='flex gap-8'>
				<Step1Graph onClick={() => onAdd({ type: 'bar' })} name='bar chart' src={barChart} />
				<Step1Graph onClick={() => onAdd({ type: 'ring' })} name='ring chart' src={ringChart} />
			</ul>
		</>
	);
}

export default Step1;
