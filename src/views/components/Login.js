import { useState } from 'react'
import logo from '../../assets/images/logo-512.png'
import login from '../../assets/images/login.png'
import arrowRight from '../../assets/images/arrow-right.png'
import submit from '../../assets/images/submit.png'
import Anime from 'react-anime'


const Login = () => {
    const [showInput, setShowInput] = useState(true)

    return (
        <div className='flex flex-col items-center justify-center max-w-2xl h-full pt-24 px-2 mx-auto'>
            <img src={logo} alt="logo" className='w-full mb-5' />
            <h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

            <img src={login} className='mb-4' alt="login" />
            <form action="" className="w-1/2 flex flex-row justify-between gap-2 relative">
                {
                    showInput
                    ? <>
                    <Anime
                        animeConfig={{
                            autoplay: true,
                            duration: 1000,
                            easing: "easeInOut"
                        }}
                        opacity='100%'
                        width='100%'
                        >
                        <div>
                            <img onClick={() => {setShowInput(!showInput)}} src={arrowRight} className='w-4 absolute m-3 right-0' alt="arrow right" />
                            <input className='w-full font-sans text-sm p-2 rounded-md border-0 bg-gray-100 border outline-none' type="text" name="username" placeholder="Username" />
                        </div>
                    </Anime>
                    </>
                    : <>
                    <Anime
                        animeConfig={{
                            autoplay: true,
                            duration: 1000,
                            easing: "easeInOut"
                        }}
                        opacity='100%'
                        width='100%'
                        >
                        <div className='w-full'>
                            <img src={submit} className='w-12 absolute m-4 right-0' alt="arrow right" />
                            <input className='font-sans text-sm p-2 rounded-md border-0 bg-gray-100 border outline-none w-full' type="password" name="password" placeholder="Password" />
                        </div>
                    </Anime>
                    </>
                }
            </form>
        </div>
    )
}

export default Login