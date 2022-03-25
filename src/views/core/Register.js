import logo from '../../assets/images/logo-512.png'
import register from '../../assets/images/register.png'


function Register () {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img src={logo} alt="logo" className='w-3/4 mb-5' />
            <h2 className='mb-32'>Anyone like statistick, but everyone need it.</h2>

            <img src={register} alt="register" />
            <form action="" className="flex flex-col w-1/5">
                <input className='p-2 rounded border' type="text" name="username" placeholder="Username" />
                <input className='p-2 rounded border' type="email" name="email" placeholder="Email" />
                <input className='p-2 rounded border' type="password" name="password" placeholder="Password" />
                <input className='p-2 rounded border' type="password" name="password_again" placeholder="Password again" />
            </form>
        </div>
    )
}

export default Register