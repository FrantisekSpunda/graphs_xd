import logo from '../../graphs_logo.png'


function Login () {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img src={logo} alt="logo" className='w-3/4 mb-5' />
            <h2 className='mb-32'>Anyone like statistick, but everyone need it.</h2>

            <form action="" className="flex flex-col w-1/5">
                <input className='p-2 rounded border' type="text" name="username" placeholder="Username" />    
                <input className='p-2 rounded border' type="password" name="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default Login