import { useState } from 'react';

import './collapse.css';

const Collapse = ({ header, children, event, className }) => {
	const [show, setShow] = useState(false);

	let events;

	switch (event) {
		case 'click':
			events = { onClick: () => setShow(!show) };
			break;
		case 'hover':
			events = {
				onMouseEnter: () => setShow(true),
				onMouseLeave: () => setShow(false),
			};
			break;
		default:
			events = { onClick: () => setShow(!show) };
	}

	return (
		<div className={`collapse ${className}`} {...events}>
			{header}
			<div className='transition-[height] duration-500 overflow-hidden' style={show ? { height: '100px' } : { height: '0' }}>
				{children}
			</div>
		</div>
	);
};

export default Collapse;
