import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-512.png'
import login from '../../assets/images/login.png'
import arrowRight from '../../assets/images/arrow-right.png'
import submit from '../../assets/images/submit.png'
import Input from '../components/Input'


const Login = () => {
    const [showInput, setShowInput] = useState(false)

    return (
        <div className='flex flex-col items-center justify-center max-w-2xl h-full pt-24 px-2 mx-auto'>
            <img src={logo} alt="logo" className='w-full mb-5' />
            <h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

            <img src={login} className='mb-4' alt="login" />
            <form action="" className="w-1/2 relative">
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
            </form>
        </div>
    )
}

export default Login