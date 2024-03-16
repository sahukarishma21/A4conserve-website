import { useState } from "react";
import './Header.css';
import { IoMdCall } from "react-icons/io";
import logoImage from '../../../Assets/a4conserv-logo-hd.png';
import { Link } from 'react-router-dom';
import ResponsivePhoneNumber from "./Phonenumber";

const Header = () => {
    const [show, setShow] = useState(false);
   
    return (
        <header className="header" id="home">
            <nav className="nav container">
                <a href="#home" className="nav-logo">
                    <img src={logoImage} alt="" className="headerimagelogo" />
                </a>
                <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/homepage" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <div className="nav-close" id="nav-close" onClick={() => setShow(!show)}>
                            <i className="ri-close-line nav-close"></i>
                        </div>
                    </ul>
                    <a href="#" className="nav-button" onClick={() => setShow(!show)}>
                        <IoMdCall /><ResponsivePhoneNumber phoneNumber="+919642437773" />
                    </a>
                </div>
                <div className="nav-toggle" onClick={() => setShow(!show)}>
                    <i className="ri-menu-4-line"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
