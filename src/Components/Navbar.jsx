import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";
import "../Css/navBar.css";
import Logo from "../assets/Logo.jpg"
function Navbar(){
    const navRef = useRef();
    const menuBar = () => {
        navRef.current.classList.toggle("responsive-menuBar");
    }
    return(
        <header>
            <h4 className="logo"><img src={Logo} alt="" />EventFinder</h4>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
               
                
                <button className="menuBar-btn menuBar-close" onClick={menuBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="menuBar-btn" onClick={menuBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
