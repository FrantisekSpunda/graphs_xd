import Input from 'components/Input';
import Tooltip from 'components/tooltip/Tooltip';
import { useState } from 'react';

const DataInput = () => {
	const [inputs, setInputs] = useState(11);

	return (
		<>
			<div className='flex gap-2'>
				<Tooltip className='w-4' text={'Add field'} event='hover' direction='right'>
					<button className='text-2xl font-semibold' onClick={() => setInputs(inputs + 1)}>
						+
					</button>
				</Tooltip>
				<Tooltip className='w-4' text={'Remove field'} event='hover' direction='right'>
					<button className='text-2xl font-semibold' onClick={() => setInputs(inputs - 1)}>
						-
					</button>
				</Tooltip>
			</div>
			<div className='flex gap-4 w-full flex-wrap'>
				{[...Array(inputs).keys()].map((key) => (
					<Input key={key} name='pepik' classNameInput='w-24 text-center rounded-md border border-grey-100' placeholder={key}></Input>
				))}
			</div>
		</>
	);
};

export default DataInput;