import Input from 'components/Input';
import Tooltip from 'components/tooltip/Tooltip';
import { useState } from 'react';
import React from 'react';

const DataInput = (props) => {
	const [inputs, setInputs] = useState(props.times);

	return (
		<>
			<div className='flex gap-2'>
				<Tooltip className='w-4' text={'Add field'} event='hover' direction='right'>
					<button
						className='text-2xl font-semibold'
						onClick={() => {
							setInputs(inputs + 1);
							props.sendInputs(inputs + 1);
							props.onChange();
						}}
					>
						+
					</button>
				</Tooltip>
				<Tooltip className='w-4' text={'Remove field'} event='hover' direction='right'>
					<button
						className='text-2xl font-semibold'
						onClick={() => {
							setInputs(inputs - 1);
							props.sendInputs(inputs - 1);
							props.onChange();
						}}
					>
						-
					</button>
				</Tooltip>
			</div>
			<div className='flex gap-4 w-full flex-wrap'>
				{[...Array(inputs).keys()].map((key) => (
					<Input
						type={props.type}
						key={key}
						name={key.toString()}
						classNameInput='w-24 text-center rounded-md border border-grey-100'
						value={props.data ? props.data[key] : key}
						onChange={props.onChange}
					></Input>
				))}
			</div>
		</>
	);
};

export default DataInput;
