import './collapse.css';

const Collapse = (props) => {
	return (
		<div className={`collapse ${props.className}`}>
			{props.header}
			<div className='transition-[max-height] duration-250 overflow-hidden' style={props.show ? { maxHeight: '100vh' } : { maxHeight: '0' }}>
				{props.children}
			</div>
		</div>
	);
};

Collapse.defaultProps = {
	maxHeight: '100',
	show: false,
};

export default Collapse;
