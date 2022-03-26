import Input from '../components/Input'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import arrowRight from '../../assets/images/arrow-right.png'
import logo from '../../assets/images/logo-512.png'
import register from '../../assets/images/register.png'
import submit from '../../assets/images/submit.png'


function Register () {
    const [showInput, setShowInput] = useState(false)

    return (
        <div className='flex flex-col items-center justify-center max-w-2xl h-full pt-24 px-2 mx-auto'>
            <img src={logo} alt="logo" className='w-full mb-5' />
            <h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

            <img src={register} className='mb-4' alt="login" />
            <form action="" className="w-1/2 relative">
                <Input type='text' name='username' placeholder='Username' className={`mb-2 ${showInput ? 'hidden' : ''}`}>
                </Input>
                <Input type='email' name='email' placeholder='Email' className={showInput ? 'hidden' : ''}>
                    <img onClick={() => {setShowInput(!showInput)}} src={arrowRight} className='cursor-pointer w-4 absolute m-3 right-0' alt="arrow right" />
                </Input>

                { showInput && 
                <>
                <Input name='password' type='password' placeholder='Password' className={'mb-2'} >
                </Input>
                <Input name='password_again' type='password' placeholder='Password again' >
                    <Link to='/your-graphs'>
                        <img type='submit' src={submit} className='cursor-pointer w-12 absolute top-1/2 right-3 translate-y-[-50%]' alt="arrow right" />
                    </Link>
                </Input>
                </>
                }
            </form>
        </div>
    )
}

export default Register