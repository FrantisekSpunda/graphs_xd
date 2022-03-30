import { Routes, Route, Navigate } from 'react-router-dom';
import Step1 from './step1/Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const CreateGraph = () => {
	return (
		<>
			<Routes>
				<Route exact path='/' element={<Navigate to='step-1' />} />
				<Route path='step-1' element={<Step1 />} />
				<Route path='/step-2' element={<Step2 />} />
				<Route path='/step-3' element={<Step3 />} />
			</Routes>
		</>
	);
};

export default CreateGraph;
