import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <nav id="Sidebar" className="h-full w-64 p-12 border-r border-grey-100">
            <h3 id="Sidebar__menu__h3" className="text-orange-300 font-semibold text-xs mb-6">MENU</h3>
            <ul className="flex flex-col gap-8 mb-12">
                <NavLink to='your-graphs'><li className="font-semibold">Your graphs</li></NavLink>
                <NavLink to='create-graph'><li className="font-semibold">New graph</li></NavLink>
                <NavLink to='account'><li className="font-semibold">Account</li></NavLink>
                <NavLink to=''><li className="font-semibold">Other subpages</li></NavLink>
            </ul>
            <h3 id="Sidebar__menu__h3" className="text-orange-300 font-semibold text-xs mb-6">COMMUNITY</h3>
            <ul className="flex flex-col gap-8">
                <NavLink to=''><li className="font-semibold">Explore</li></NavLink>
                <NavLink to=''><li className="font-semibold">Graph design</li></NavLink>
                <NavLink to=''><li className="font-semibold">Demo</li></NavLink>
            </ul>
        </nav>
    )
}

export default Sidebar