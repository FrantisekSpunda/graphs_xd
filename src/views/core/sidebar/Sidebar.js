import './sidebar.css'

import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <nav id="Sidebar" className="h-full w-64 p-12 relative">
            <h3 className="sidebar__h3 relative w-min text-orange-300 font-semibold text-xs mb-6">MENU</h3>
            <ul className="sidebar__ul relative flex flex-col gap-8 mb-16">
                <NavLink to='create-graph' className='font-semibold'>New graph</NavLink>
                <NavLink to='your-graphs' className='font-semibold'>Your graphs</NavLink>
                <NavLink to='account' className='font-semibold'>Account</NavLink>
                <NavLink to='' className='font-semibold'>Other subpages</NavLink>
            </ul>
            <h3 className="sidebar__h3 relative w-min text-orange-300 font-semibold text-xs mb-6">COMMUNITY</h3>
            <ul className="sidebar__ul relative flex flex-col gap-8">
                <NavLink to='' className='font-semibold'>Explore</NavLink>
                <NavLink to='' className='font-semibold'>Graph design</NavLink>
                <NavLink to='' className='font-semibold'>Demo</NavLink>
            </ul>
        </nav>
    )
}

export default Sidebar