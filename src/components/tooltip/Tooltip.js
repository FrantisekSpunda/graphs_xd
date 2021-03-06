import { useState } from 'react';

import './tooltip.css';

const Tooltip = ({ text, children, className, event, direction }) => {
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
		<div className={`relative ${className}`} {...events}>
			{children}
			<div className={`tooltip${'-' + direction} px-3 py-1 text-xs w-fit rounded-md bg-grey-900 text-white ${!show && 'hidden'}`}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Tooltip;
