import { useState } from 'react';
import Step1 from './step1/Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const CreateGraph = () => {
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
		setStep(step + 1);
	};

	return (
		<div className='w-full h-full px-10 py-6 relative'>
			<div id='step-animation' className='flex justify-between items-center w-1/4 absolute left-[50%] translate-x-[-50%]'>
				<div className='rounded-full w-6 h-6 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 bg-orange-300'>
					1
				</div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step >= 2 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div
					className={`rounded-full w-6 h-6 bg-grey-300 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 ${
						step >= 2 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				>
					2
				</div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div className={`w-0.5 h-0.5 rounded-full transition-[background-color] duration-500 ${step === 3 ? 'bg-orange-300' : 'bg-grey-300'}`}></div>
				<div
					className={`rounded-full w-6 h-6 flex justify-center items-center font-semibold text-white transition-[background-color] duration-500 ${
						step === 3 ? 'bg-orange-300' : 'bg-grey-300'
					}`}
				>
					3
				</div>
			</div>
			{step === 1 && <Step1 onAdd={addToGraph} />}
			{step === 2 && <Step2 onAdd={addToGraph} />}
			{step === 3 && <Step3 onAdd={addToGraph} />}
		</div>
	);
};

export default CreateGraph;
