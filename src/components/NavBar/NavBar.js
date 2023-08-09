import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
export const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <Link to='/'><h1 class="logo">Pet paradise</h1></Link> 
                <ul class="navbar-nav">
                    <li class="nav-item"><NavLink to={`/productos/perros`} className="nav-link">Perros</NavLink></li>
                    <li class="nav-item"><NavLink to={`/productos/gatos`} className="nav-link">Gatos</NavLink></li>
                    <li class="nav-item"><NavLink to={`/productos/exoticos`} className="nav-link">Exoticos</NavLink></li>
                    <li class="nav-item"><CartWidget /></li>
                </ul>
            </div>
        </nav>

    );
}