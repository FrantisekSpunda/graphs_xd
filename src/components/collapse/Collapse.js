import { useState } from 'react';
import './collapse.css';

const Collapse = ({ header, children, show, className }) => {
	// const [showCollapse, setShowCollapse] = useState(false);

	// const show = () => {
	// 	setShowCollapse(!showCollapse);
	// };
	// let events;

	// switch (event) {
	// 	case 'click':
	// 		events = { onClick: () => setShow(!show) };
	// 		break;
	// 	case 'hover':
	// 		events = {
	// 			onMouseEnter: () => setShow(true),
	// 			onMouseLeave: () => setShow(false),
	// 		};
	// 		break;
	// 	default:
	// 		events = { onClick: () => setShow(!show) };
	// }

	return (
		<div className={`collapse ${className}`}>
			{header}
			<div className='transition-[height] duration-500 overflow-hidden' style={show ? { height: '100px' } : { height: '0' }}>
				{children}
			</div>
		</div>
	);
};

export default Collapse;
