import Collapse from 'components/collapse/Collapse';

function CreateGraph() {
	return (
		<div className='p-4'>
			<Collapse
				show={false}
				header={
					<>
						<h1>Collapse panel</h1>
						<button onClick={() => (this.show = true)}>pepa</button>
					</>
				}
				className='border border-grey-300'
			>
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
