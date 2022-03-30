const Step1Graph = ({ name, src, onClick }) => {
	return (
		<figure onClick={onClick} className='w-72 h-56 border border-grey-300 rounded-md flex flex-col justify-between p-4 cursor-pointer'>
			<div className='h-full flex items-center'>
				<img className='mx-auto w-3/4' src={src} alt={name} />
			</div>
			<figcaption className='p-2 font-semibold text-center'>{name}</figcaption>
		</figure>
	);
};

export default Step1Graph;
