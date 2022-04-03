import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './Step3';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const CreateGraph = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [step, setStep] = useState(1);
	const [graphs, setGraphs] = useState([
		{
			id: 1,
			created: Date.now(),
			data: ['1', '2', '3', '4'],
			label: 'graf jedna',
		},
		{
			id: 2,
			created: Date.now(),
			data: ['1', '2', '3', '4', 'pepa'],
			label: 'graf dva',
		},
	]);

	const [newGraph, setNewGraph] = useState({
		id: Math.floor(Math.random() * 10000) + 1,
	});

	const addToGraph = (graph) => {
		setNewGraph({ ...newGraph, ...graph });

		navigate(`step-${step + 1}`);
		setStep(parseInt(location.pathname.slice(-1)));
	};

	return (
		<div className='w-full h-full px-10 py-6 relative'>
			<div id='step-animation' className='flex justify-between items-center w-1/4 absolute left-[50%] translate-x-[-50%]'>
				<div className='rounded-full w-6 h-6 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 bg-orange-300'>
					1
				</div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`rounded-full w-6 h-6 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 ${
						location.pathname.slice(-1) >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				>
					2
				</div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				></div>
				<div
					className={`rounded-full w-6 h-6 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 ${
						parseInt(location.pathname.slice(-1)) === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				>
					3
				</div>
			</div>
			<Routes>
				<Route exact path='/' element={<Navigate to='step-1' />} />
				<Route path='step-1' element={<Step1 onAdd={addToGraph} />} />
				<Route
					path='/step-2'
					element={
						<div>
							<h2 className='text-lg font-semibold mb-5'>New graph</h2>
							<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Add data and styling</h2>
							<div className='flex flex-row gap-12'>
								<Step2 onAdd={addToGraph} newGraph={newGraph} />
							</div>
						</div>
					}
				/>
				<Route path='/step-3' element={<Step3 onAdd={addToGraph} />} />
			</Routes>
		</div>
	);
};

export default CreateGraph;
