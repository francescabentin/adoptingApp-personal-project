import { Link, useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';


    return (
        <nav className={`${isHomePage ? 'transparent navbar' : 'navbar'}`}>
            <Link to='/'> AMIGOS PERRUNOS </Link>
            <ul className="navbar__ul">
                <li className="navbar__ul__li">
                    <Link to='/quienesSomos'>COMO FUNCIONA</Link>
                </li>
                <li className='navbar__ul__li'>
                    <Link to='/protectoras'>PROTECTORAS</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to='/adopta'>HUMANOS</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to='/contactanos'>DONACIONES</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;