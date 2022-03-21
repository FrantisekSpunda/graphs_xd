import logo from '../../graphs_logo.png';

function Header() {
    return (
        <header className="w-full h-16 p-3 border-b border-gray-300 flex justify-between">
            <img src={logo} alt="logo" className='h-full' />

            <p className='text-base flex items-center'>frantisek.spunda</p>
        </header>
    );
  }
  
  export default Header;