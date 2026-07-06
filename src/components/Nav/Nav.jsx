import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
const {getTotalItems} = useCart(); 
const TotalItems = getTotalItems(); 


    return (

        <nav className="nav-list">
            <ul>
                <li>
                   <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/carrito"}>
                    Carrito 
                    {TotalItems > 0 && <span className="incart">{TotalItems}</span>}
                    </Link>
                </li>

            </ul>
        </nav>
    )
}