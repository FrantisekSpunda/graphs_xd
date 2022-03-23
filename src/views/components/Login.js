import logo from '../../assets/images/logo.svg'
import login from '../../assets/images/login.svg'

import Anime from 'react-anime';



{/* <Anime easing="easeOutElastic"
loop={true}
duration={1000}
direction="alternate"
delay={(el, index) => index * 240}
translateX='13rem'
scale={[.75, .9]}>
<div className="blue"/>
<div className="green"/>
<div className="red"/>
</Anime> */}


const Login = () => (
    <div className='flex flex-col items-center justify-center max-w-2xl h-full pt-24 px-2 mx-auto'>
        <img src={logo} alt="logo" className='w-full mb-5' />
        <h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

        <img src={login} className='mb-2' alt="login" />
        <form action="" className="text- flex flex-col w-1/2 justify-between gap-2">
            <input id='login_username' className='font-sans text-sm p-2 rounded-md border-0 bg-gray-100 border outline-none' type="text" name="username" placeholder="Username" />    
            <input className='font-sans text-sm p-2 rounded-md border-0 bg-gray-100 border outline-none' type="password" name="password" placeholder="Password" />
        </form>
    </div>
)

console.log('pepe');
const loginUsername =  document.getElementById('login_username')
loginUsername.addEventListener('click',() => {
    anime({
        'targets': loginUsername,
        'translateX': 250
    })
})

export default Login