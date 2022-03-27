import Collapse from 'components/collapse/Collapse';

function CreateGraph() {
	return (
		<div className='p-4'>
			<Collapse header={<h1>Collapse panel</h1>} direction='bottom' className='border border-grey-300' event='hover'>
				<div>
					Content of callapse
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
			</Collapse>
		</div>
	);
}

export default CreateGraph;
