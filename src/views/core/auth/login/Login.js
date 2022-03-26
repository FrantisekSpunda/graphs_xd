import { useState } from 'react'
import { Link } from 'react-router-dom';

import Base from '../Base'
import Input from 'views/components/Input'

import login from './login.png'
import arrowRight from 'assets/images/icons/arrow-right.png'
import submit from 'assets/images/icons/submit.png'


const Login = () => {
    const [showInput, setShowInput] = useState(false)

    return (
        <Base heading={login}>
            <Input type='text' name='username' placeholder='Username' className={showInput ? 'hidden' : ''}>
                <img onClick={() => {setShowInput(!showInput)}} src={arrowRight} className='cursor-pointer w-4 absolute m-3 right-0' alt="arrow right" />
            </Input>

            { showInput &&
            <Input name='password' type='password' placeholder='Password' >
                <Link to='/register'>
                    <img type='submit' src={submit} className='cursor-pointer w-12 absolute top-1/2 right-3 translate-y-[-50%]' alt="arrow right" />
                </Link>
            </Input>
            }
        </Base>
    )
}

export default Login