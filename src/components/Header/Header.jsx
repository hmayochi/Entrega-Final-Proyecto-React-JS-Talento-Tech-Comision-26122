import logo from "../../assets/react.svg"
import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav";
import "./Header.css"

export const Header = () => {

    return (

            <header>
                <div className="logo-container">
                    
                    <Link to={"/"}>
                    <img src={logo} alt="" />
                    <span>My App</span>
                    </Link>          

                </div>
                 <Nav />
            </header>

    )

}