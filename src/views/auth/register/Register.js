import { useState } from 'react';
import { Link } from 'react-router-dom';

import Base from '../Base';
import Input from 'components/Input';

import arrowRight from 'assets/images/icons/arrow-right.png';
import register from 'assets/images/register.png';
import submit from 'assets/images/icons/submit.png';

function Register() {
	const [showInput, setShowInput] = useState(false);

	return (
		<Base heading={register}>
			<form action='' className='w-1/2 relative'>
				<Input type='text' name='username' placeholder='Username' className={`mb-2 ${showInput ? 'hidden' : ''}`}></Input>
				<Input type='email' name='email' placeholder='Email' className={showInput ? 'hidden' : ''}>
					<img
						onClick={() => {
							setShowInput(!showInput);
						}}
						src={arrowRight}
						className='cursor-pointer w-4 absolute m-3 right-0 transition-transform hover:translate-x-1'
						alt='arrow right'
					/>
				</Input>

				{showInput && (
					<>
						<Input name='password' type='password' placeholder='Password' className={'mb-2'}></Input>
						<Input name='password_again' type='password' placeholder='Password again'>
							<Link to='/your-graphs'>
								<img
									type='submit'
									src={submit}
									className='cursor-pointer w-12 absolute top-3/4 right-3 translate-y-[-50%] transition-transform hover:scale-110'
									alt='arrow right'
								/>
							</Link>
						</Input>
					</>
				)}
			</form>
		</Base>
	);
}

export default Register;
