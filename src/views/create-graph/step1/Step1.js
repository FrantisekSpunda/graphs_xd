import Step1Graph from './Step1Graph';

import barChart from 'assets/images/charts/bar.png';
import ringChart from 'assets/images/charts/ring.png';

function Step1() {
	return (
		<div className='w-full h-full px-10 py-6 relative'>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Choose variant of graph</h2>
			<h3 className='text-orange-900 font-semibold mb-2 w-1/3 border-b border-grey-100'>CIRCLE GRAPHS</h3>
			<ul className='flex gap-8'>
				<Step1Graph name='bar chart' src={barChart} />
				<Step1Graph name='ring chart' src={ringChart} />
			</ul>
		</div>
	);
}

// <Collapse
// 	header={
// 		<>
// 			<h1>Collapse panel</h1>
// 			<button onClick={() => setShowCollapse(!showCollapse)}>pepa</button>
// 		</>
// 	}
// 	show={showCollapse}
// 	className='border border-grey-300'
// >
// 	<div>
// 		Content of callapse
// 		<ul>
// 			<li>1</li>
// 			<li>2</li>
// 			<li>3</li>
// 			<li>4</li>
// 		</ul>
// 	</div>
// </Collapse>;

export default Step1;
