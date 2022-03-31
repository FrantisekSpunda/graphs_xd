import Collapse from 'components/collapse/Collapse';
import Input from 'components/Input';
import DataInput from './DataInput';
import arrow2Down from 'assets/images/icons/arrow2-down.png';
import { useState } from 'react';

const Step2 = ({ onAdd, newGraph }) => {
	const [showColl1, setShowColl1] = useState(true);
	const [showColl2, setShowColl2] = useState(false);

	function onSubmit(e) {
		e.preventDefault();
		console.log('submit');
	}

	return (
		<>
			<h2 className='text-lg font-semibold mb-5'>New graph</h2>
			<h2 className='text-lg font-semibold text-orange-500 text-center mb-8'>Add data and styling</h2>
			<form onSubmit={onSubmit} className='flex flex-col items-start gap-8 w-1/2 mx-auto'>
				<Collapse
					header={
						<div className='flex justify-between m-2'>
							<h2>Data</h2>
							<img src={arrow2Down} className='w-5 cursor-pointer' alt='arrow down' onClick={() => setShowColl1(!showColl1)} />
						</div>
					}
					className='w-full border-b border-grey-100'
					show={showColl1}
				>
					<DataInput></DataInput>
					<Input type='text' name='username' placeholder='Data'></Input>
					<Input type='text' name='username' placeholder='Data'></Input>
				</Collapse>
				<input type='submit' className='border rounded border-grey-300 p-2' />
			</form>
		</>
	);
};

export default Step2;
