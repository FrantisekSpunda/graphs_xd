import { useState } from 'react';

import './tooltip.css';

const Tooltip = ({ text, children, className, event }) => {
	const [show, setShow] = useState(false);

	let myTooltip;

	switch (event) {
		case 'click':
			myTooltip = { onClick: () => setShow(!show) };
			break;
		case 'hover':
			myTooltip = {
				onMouseEnter: () => setShow(true),
				onMouseLeave: () => setShow(false),
			};
			break;
		default:
			myTooltip = { onClick: () => setShow(!show) };
	}

	return (
		<div className={`relative ${className}`} {...myTooltip}>
			{children}
			<div className={`tooltip px-3 py-1 text-xs w-fit rounded-md bg-grey-900 text-white ${!show && 'hidden'}`}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Tooltip;
