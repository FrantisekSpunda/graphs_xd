import Collapse from 'components/collapse/Collapse';
import Input from 'components/Input';
import DataInput from './DataInput';
import arrow2Down from 'assets/images/icons/arrow2-down.png';
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Step2 = ({ onAdd, newGraph }) => {
	const [title, setTitle] = useState('Bar Chart');
	const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);

	const setLabelsPos = (data, pos) => {
		setLabels(
			labels.map((value, index) => {
				console.log(index, pos);
				return index === pos ? value : data;
			}),
		);
	};

	let collapseNumb = (numb) => {
		let array = [];
		for (let i = 0; i < numb; i++) {
			array[i] = false;
		}
		return array;
	};
	const [showColl, setShowColl] = useState(collapseNumb(100));
	const setShoCollPos = (pos) => {
		setShowColl(
			showColl.map((value, index) => {
				return index === pos ? !value : value;
			}),
		);
	};

	function onSubmit(e) {
		e.preventDefault();
		console.log('submit');
	}

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: title,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [5, 49, 8, 25, 21, 37, 5],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Dataset 1',
				data: [12, 19, 3, 5, 2, 3, 5],
				backgroundColor: 'rgba(255, 99, 132, 1)',
			},
		],
	};

	return (
		<>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Add data and styling</h2>
			<div className='flex flex-row gap-12'>
				<div className='w-full'>
					<Bar options={options} data={data} />
				</div>
				<form onSubmit={onSubmit} className='w-full flex flex-col items-start gap-8 mx-auto overflow-y-auto h-[78vh]'>
					<Collapse
						header={
							<div className='flex justify-between m-2'>
								<h2>Basics</h2>
								<img
									src={arrow2Down}
									className={`w-5 cursor-pointer transition-transform ${showColl[0] && 'rotate-180'}`}
									alt='arrow down'
									onClick={() => setShoCollPos(0)}
								/>
							</div>
						}
						className='w-full border-b border-grey-100'
						show={showColl[0]}
						maxHeigh='100'
					>
						Title:
						<Input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} classNameInput='border border-grey-100 my-2'></Input>
					</Collapse>

					<Collapse
						header={
							<div className='flex justify-between m-2'>
								<h2>Labels</h2>
								<img
									src={arrow2Down}
									className={`w-5 cursor-pointer transition-transform ${showColl[1] && 'rotate-180'}`}
									alt='arrow down'
									onClick={() => setShoCollPos(1)}
								/>
							</div>
						}
						className='w-full border-b border-grey-100'
						show={showColl[1]}
						maxHeigh='100'
					>
						<DataInput times={7} data={labels} onChange={(e) => setLabelsPos(e.target.value, e.target.key)}></DataInput>
					</Collapse>

					<Collapse
						header={
							<div className='flex justify-between m-2'>
								<h2>Data</h2>
								<img
									src={arrow2Down}
									className={`w-5 cursor-pointer transition-transform ${showColl[2] && 'rotate-180'}`}
									alt='arrow down'
									onClick={() => setShoCollPos(2)}
								/>
							</div>
						}
						className='w-full border-b border-grey-100'
						show={showColl[2]}
						maxHeigh='100'
					>
						<DataInput times={7}></DataInput>
					</Collapse>

					<Collapse
						header={
							<div className='flex justify-between m-2'>
								<h2>Legend</h2>
								<img
									src={arrow2Down}
									className={`w-5 cursor-pointer transition-transform ${showColl[3] && 'rotate-180'}`}
									alt='arrow down'
									onClick={() => setShoCollPos(3)}
								/>
							</div>
						}
						className='w-full border-b border-grey-100'
						show={showColl[3]}
						maxHeigh='100'
					>
						Legend:
						<Input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} classNameInput='border border-grey-100 my-2'></Input>
					</Collapse>
					<input type='submit' className='border rounded border-grey-300 p-2' />
				</form>
			</div>
		</>
	);
};

export default Step2;
