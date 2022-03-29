import './collapse.css';

const Collapse = ({ header, children, className, show }) => {
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
