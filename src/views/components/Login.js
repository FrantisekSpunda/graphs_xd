import logo from '../../graphs_logo.png'


function Login () {

    return (
        <div className='flex flex-col items-center justify-center h-full p-24'>
            <img src={logo} alt="logo" className='w-1/2 mb-5' />
            <h2 className='mb-32 font-bold'>Anyone like statistick, but everyone need it.</h2>

            <form action="" className="flex flex-col w-1/5 justify-between gap-2">
                <input className='p-2 rounded-md border-gray-300 border outline-none' type="text" name="username" placeholder="Username" />    
                <input className='p-2 rounded-md border-gray-300 border outline-none' type="password" name="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default Login