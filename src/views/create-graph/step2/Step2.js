import Collapse from 'components/collapse/Collapse';
import Input from 'components/Input';
import DataInput from './DataInput';
import arrow2Down from 'assets/images/icons/arrow2-down.png';
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let defInputs = 7;

const Step2 = ({ onAdd, newGraph }) => {
	// Corrupts functionality
	const [showColl, setShowColl] = useState([...Array(100).keys()]);
	const setShoCollPos = (pos) => setShowColl(showColl.map((value, index) => (index === pos ? !value : value)));

	// Chart options
	const [title, setTitle] = useState('Bar Chart');
	const [labels, setLabels] = useState([...Array(defInputs).keys()]);
	const [data, setData] = useState([...Array(defInputs).keys()]);
	const [inputs, setInputs] = useState(defInputs);

	const setOnIndex = (e, array, setArray) => {
		try {
			const returnArray = array.map((value, index) => (index === parseInt(e.target.name) ? e.target.value : value));
			parseInt(e.target.name) > array.length - 1 && returnArray.push(e.target.value);
			inputs < array.length ? setArray(array.slice(0, inputs - array.length)) : setInputs(array.push(inputs));
		} catch {
			// setInputs(inputs);
			console.log(inputs);
			// inputs < array.length ? setArray(array.slice(0, inputs - array.length)) : setInputs(array.push(inputs));
		}
	};

	const optionsChart = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: title,
			},
		},
	};
	const dataChart = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: data,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	// Form sending
	function onSubmit(e) {
		e.preventDefault();
		console.log('submit');
	}

	return (
		<>
			<div className='w-full'>
				<Bar options={optionsChart} data={dataChart} />
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
					<DataInput sendInputs={setInputs} type='text' times={labels.length} data={labels} onChange={(e) => setOnIndex(e, labels, setLabels)}></DataInput>
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
					<DataInput sendInputs={setInputs} type='number' times={data.length} data={data} onChange={(e) => setOnIndex(e, data, setData)}></DataInput>
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
		</>
	);
};

export default Step2;
