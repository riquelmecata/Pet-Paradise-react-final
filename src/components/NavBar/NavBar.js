import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav>
           <Link to='/'><h1>Pet paradise</h1></Link> 
            <div>
                <NavLink to={`/productos/perros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perros</NavLink>
                <NavLink to={`/productos/gatos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gatos</NavLink>
                <NavLink to={`/productos/exoticos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Exoticos</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}