import Collapse from 'components/collapse/Collapse';
import Input from 'components/Input';
import DataInput from './DataInput';
import arrow2Down from 'assets/images/icons/arrow2-down.png';
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Step2 = ({ onAdd, newGraph }) => {
	let collapseNumb = (numb) => {
		let array = [];
		for (let i = 0; i < numb; i++) {
			array[i] = false;
		}
		return array;
	};
	const [showColl, setShowColl] = useState(collapseNumb(2));
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
				text: 'Chart.js Bar Chart',
			},
		},
	};

	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [12, 19, 3, 5, 2, 3, 5],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	return (
		<>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Add data and styling</h2>
			<div className='w-1/2 mx-auto'>
				<Bar options={options} data={data} />
			</div>
			<form onSubmit={onSubmit} className='flex flex-col items-start gap-8 w-1/2 mx-auto'>
				<Collapse
					header={
						<div className='flex justify-between m-2'>
							<h2>Data</h2>
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
					<DataInput></DataInput>
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
					<DataInput></DataInput>
				</Collapse>

				<input type='submit' className='border rounded border-grey-300 p-2' />
			</form>
		</>
	);
};

export default Step2;
