import Collapse from 'components/collapse/Collapse';
import React, { useState } from 'react';
import barChart from 'assets/images/charts/bar.png';
import ringChart from 'assets/images/charts/ring.png';

function CreateGraph() {
	return (
		<div className='w-full h-full px-10 py-6 relative'>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Choose variant of graph</h2>
			<h3 className='text-orange-900 font-semibold mb-2 w-1/3 border-b border-grey-100'>CIRCLE GRAPHS</h3>
			<ul className='flex gap-8'>
				<figure className='w-72 h-56 border border-grey-300 rounded-md flex flex-col justify-between p-4'>
					<div className='h-full flex items-center'>
						<img className='mx-auto w-3/4' src={barChart} alt='bar chart' />
					</div>
					<figcaption className='p-2 font-semibold text-center'>bar chart</figcaption>
				</figure>
				<figure className='w-72 h-56 border border-grey-300 rounded-md flex flex-col justify-between p-4'>
					<div className='h-full flex items-center'>
						<img className='mx-auto w-3/4' src={ringChart} alt='ring chart' />
					</div>
					<figcaption className='p-2 font-semibold text-center'>ring chart</figcaption>
				</figure>
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

export default CreateGraph;
