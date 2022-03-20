import logo from '../../graphs_logo.png'

function Login () {

    return (
        <div className='flex justify-center'>
            <img src={logo} alt="logo" />
            <h2>Anyone like statistick, but everyone need it.</h2>

            <form action="" className="login_form">
                <input type="text" name="username" placeholder="Username" />    
                <input type="password" name="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default Login